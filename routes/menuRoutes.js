const express = require('express');
const router = express.Router();

const MenuData = require('../models/menu');

router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new MenuData(data);
      const response = await newMenu.save();
      console.log("Data saved successfully.");
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const result = await MenuData.find();
      console.log(result);
      console.log("Data shown successfully.");
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });
  module.exports = router;