const express = require('express');
const router = express.Router();
const rickyController = require('../controllers/ricky.controller');
const rickyControllerInstance = new rickyController();

router.get('/api/v1/favorites', rickyControllerInstance.get);
router.post('/api/v1/favorites', rickyControllerInstance.create);
router.delete('/api/v1/favorites/:id', rickyControllerInstance.delete);

module.exports = router;
