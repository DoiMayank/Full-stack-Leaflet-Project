// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('Enter your DB string', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', userRoutes);

// // Signup Route
// app.post('/api/signup', async (req, res) => {
//     const { username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
  
//     const newUser = new User({
//       username,
//       password: hashedPassword,
//     });
  
//     try {
//       await newUser.save();
//       res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//       res.status(400).json({ error: 'User could not be created' });
//     }
//   });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
