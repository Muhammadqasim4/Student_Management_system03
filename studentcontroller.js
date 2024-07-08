const Student = require('../models/Student');
const emailService = require('../services/emailService');

// Create a new student
exports.registerStudent = async (req, res) => {
    const { name, email, age } = req.body;

    try {
        let student = await Student.findOne({ email });

        if (student) {
            return res.status(400).json({ msg: 'Student already exists' });
        }

        student = new Student({
            name,
            email,
            age
        });

        await student.save();

        // Send confirmation email (use your own email service or API)
        emailService.sendEmail(email, 'Registration Confirmation', `Dear ${name}, you have successfully registered.`);

        res.json(student);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get student profile
exports.getStudentProfile = async (req, res) => {
    try {
        const student = await Student.findById(req.student.id).select('-__v');
        res.json(student);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
