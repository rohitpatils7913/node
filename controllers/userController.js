const User = require('../models/user');

exports.signup = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const newUser = new User({
      first_name,
      last_name,
      email,
      password
    });

    await newUser.save();

    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
      res.json({ message: 'Sign-in successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ error: 'Failed to sign in' });
  }
};

