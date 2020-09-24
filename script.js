//Environement variable
require('dotenv').config({ path: __dirname + '/.env' });

//Import Axios
const axios = require('axios');

//Get Time
const currentTime = new Date();

//Messages array
const MESSAGES = [
  'Daily Stand Up dans 10 minutes 🔥',
  "C'est l'heure de manger 🍔",
  'Vous avez bien travaillé, rentrez chez vous 🏠',
];

//Pick message depending on current time
let currentMessage;

if (currentTime.getHours() === 8 && currentTime.getMinutes() === 50) {
  currentMessage = MESSAGES[0];
} else if (currentTime.getHours() === 12 && currentTime.getMinutes() === 30) {
  currentMessage = MESSAGES[1];
} else {
  currentMessage = MESSAGES[2];
}

//HTTP Request
const sendMessage = async () => {
  try {
    axios.post(
      process.env.SLACK,
      { text: currentMessage },
      { headers: { 'Content-type': 'application/json' } }
    );
  } catch (error) {
    console.log(error);
  }
};

sendMessage();
