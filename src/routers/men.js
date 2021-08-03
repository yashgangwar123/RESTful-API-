const express = require('express');
const router = new express.Router();
const MensRanking = require('../models/mens');

// we will handle POST request to create
router.post('/mens', async (req, res) => {
    try {
        const addingMensRanking = new MensRanking(req.body);
        const result = await addingMensRanking.save();
        res.status(201).send(result);
    } catch (err) {
        res.status(400).send(err);
    }
})


// we will handle GET request to read data from database
router.get('/mens', async (req, res) => {
    try {
        const getMens = await MensRanking.find().sort({"ranking":1}) // so that data is always shown sorted by rank
        res.send(getMens);
    } catch (err) {
        res.status(400).send(err);
    }
})


// to get individual data as per ranks
router.get('/mens/:ranking', async (req, res) => {
    try {
        const menranking = req.params.ranking
        const getMen = await MensRanking.find({ ranking: menranking })
        res.send(getMen);
    } catch (err) {
        res.status(400).send(err);
    }
})


// we use PATCH to update data in api
router.patch('/mens/:id', async (req, res) => {
    try {
        const id = req.params.id
        const getMen = await MensRanking.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.send(getMen);
    } catch (err) {
        res.status(500).send(err);
    }
})


// we will handle DELETE requests
router.delete('/mens/:id', async (req, res) => {
    try {
        const id = req.params.id
        const getMen = await MensRanking.findByIdAndDelete({ _id: id });
        res.send(getMen);
    } catch (err) {
        res.status(500).send(err);
    }
})


module.exports = router;