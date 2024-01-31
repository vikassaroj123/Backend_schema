const express = require('express');
const router = express.Router();

const Person = require('../models/person');
// Post route to add data in this format
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        // Create a new person document using the mongoose model
        const response = await newPerson.save();
        console.log("Data saved.");
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// GET Method for data
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log(data);
        console.log("Data Show sucessfullly..");
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Make the router for routing.
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'Chef' || workType == 'Waiter' || workType == 'Manager') {
            const response = await Person.find({ work: workType })
            console.log("Response fetched.");
            res.status(200).json(response);
        }
        else {
            res.status(404).json({ error: 'Invalid work type.' })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
})

module.exports = router;

//Comment added for testing purpose.
