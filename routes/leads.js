const express = require('express');
const router = express.Router();
const { submitLead, getLeads } = require('../controllers/leadController');

// @route   POST /api/leads
// @desc    Submit a new lead/subscription
// @access  Public
router.post('/', submitLead);

// @route   GET /api/leads
// @desc    Get all leads (Admin)
// @access  Private (Mock public for now)
router.get('/', getLeads);

module.exports = router;
