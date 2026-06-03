const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    email: ["cmmmultiverse@gmail.com", "cassidymahlatse@gmail.com"],
    phone: "+27 66 454 0199",
    whatsapp: "+27 66 454 0199",
    locations: [
      { name: "Head Office", city: "Modjadji", country: "South Africa" },
      { name: "Branch", city: "Bedfordview", province: "Gauteng", country: "South Africa" },
    ],
  });
});

router.post("/", (req, res) => {
  console.log("Contact request received:", req.body);
  res.json({ success: true, message: "Thank you for reaching out. We will respond within 24 hours." });
});

module.exports = router;
