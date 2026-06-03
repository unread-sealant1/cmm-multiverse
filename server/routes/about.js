const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    founder: "Cassidy Mahlatse Masila",
    vision: "To become a global catalyst for digital evolution by building innovative technologies, empowering businesses, and creating opportunities that shape the future.",
    mission: "To design, develop, and deliver transformative digital solutions that help businesses innovate, scale, and succeed while fostering technological advancement and economic empowerment.",
    purpose: "To simplify complexity through technology and create solutions that unlock growth, opportunity, and meaningful impact.",
    values: [
      { title: "Innovation First", desc: "We embrace emerging technologies and continuously explore better ways to solve complex problems." },
      { title: "Excellence Without Compromise", desc: "Every project is built with precision and a commitment to production-grade performance." },
      { title: "People Before Products", desc: "We design every experience with users in mind, ensuring meaningful value." },
      { title: "Integrity and Accountability", desc: "We communicate transparently and hold ourselves accountable for delivering results." },
      { title: "Continuous Growth", desc: "We invest in knowledge and continually improve to stay ahead of change." },
      { title: "Impact Driven", desc: "Success is measured by the value we create for businesses and communities." },
    ],
  });
});

module.exports = router;
