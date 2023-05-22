const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userController = require('./controllers/userController');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MONGODB is conncted');
  })
  .catch((error) => {
    console.error('error is coming while connecting to MONGODB :', error);
  });

app.use(bodyParser.json());




app.post('/api/signup', userController.signup);
app.post('/api/signin', userController.signin);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
