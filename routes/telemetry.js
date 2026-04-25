const express = require('express');
const router = express.Router();
const { getTelemetryData } = require('../controllers/telemetryController');

// @route   GET /api/telemetry
// @desc    Get system telemetry data
// @access  Public
router.get('/', getTelemetryData);

module.exports = router;
