const express = require('express');
const router = express.Router();
const { registerStudent, getStudentProfile } = require('../controllers/studentController');
const authService = require('../services/authService');

// Route: POST /api/students/register
router.post('/students/register', registerStudent);

// Route: GET /api/students/profile
router.get('/students/profile', authService.authenticateToken, getStudentProfile);

module.exports = router;
