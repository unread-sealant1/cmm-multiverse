const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const auth = require('../middleware/auth');

const router = express.Router();
const DATA_FILE = path.join(__dirname, '..', 'data.json');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', 'uploads'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`);
  },
});
const upload = multer({ storage });

function readProjects() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function writeProjects(projects) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2));
}

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { email } });
});

router.get('/me', auth, (req, res) => {
  res.json({ user: req.user });
});

router.get('/projects', (req, res) => {
  const projects = readProjects();
  res.json(projects);
});

router.post('/projects', auth, upload.single('image'), (req, res) => {
  const projects = readProjects();
  const { title, desc, tags, live } = req.body;

  const project = {
    id: Date.now(),
    title,
    desc,
    tags: tags ? tags.split(',').map((t) => t.trim()) : [],
    live: live || '',
    image: req.file ? req.file.filename : '',
  };

  projects.push(project);
  writeProjects(projects);
  res.json(project);
});

router.put('/projects/:id', auth, upload.single('image'), (req, res) => {
  let projects = readProjects();
  const id = Number(req.params.id);
  const idx = projects.findIndex((p) => p.id === id);

  if (idx === -1) return res.status(404).json({ error: 'Project not found' });

  const { title, desc, tags, live } = req.body;

  projects[idx] = {
    ...projects[idx],
    title: title || projects[idx].title,
    desc: desc || projects[idx].desc,
    tags: tags ? tags.split(',').map((t) => t.trim()) : projects[idx].tags,
    live: live !== undefined ? live : projects[idx].live,
    image: req.file ? req.file.filename : projects[idx].image,
  };

  writeProjects(projects);
  res.json(projects[idx]);
});

router.delete('/projects/:id', auth, (req, res) => {
  let projects = readProjects();
  const id = Number(req.params.id);
  const idx = projects.findIndex((p) => p.id === id);

  if (idx === -1) return res.status(404).json({ error: 'Project not found' });

  const [removed] = projects.splice(idx, 1);

  if (removed.image) {
    const imgPath = path.join(__dirname, '..', 'uploads', removed.image);
    if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
  }

  writeProjects(projects);
  res.json({ success: true });
});

module.exports = router;
