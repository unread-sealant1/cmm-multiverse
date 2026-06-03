const express = require("express");
const router = express.Router();

router.get("/devices", (req, res) => {
  res.json([
    { id: 1, name: "iPhone 15 Pro", price: "R24,999", category: "Phones", image: "placeholder" },
    { id: 2, name: "MacBook Pro M3", price: "R32,000", category: "Computers", image: "placeholder" },
    { id: 3, name: "PlayStation 5 Slim", price: "R12,500", category: "PlayStations", image: "placeholder" },
  ]);
});

router.get("/repairs", (req, res) => {
  res.json([
    { id: 1, service: "Screen Replacement", basePrice: "R350", duration: "24h" },
    { id: 2, service: "Battery Swap", basePrice: "R250", duration: "2h" },
    { id: 3, service: "Logic Board Repair", basePrice: "R800", duration: "3-5 Days" },
  ]);
});

module.exports = router;
