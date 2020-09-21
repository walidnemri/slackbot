//Import Axios
const axios = require('axios');

//Get Time
const currentTime = new Date();

const MESSAGES = [
  'Daily Stand Up dans 10 minutes!',
  "C'est l'heure de manger!",
  'Vous avez bien travaillé, rentrez chez vous!',
];

let currentMessage;

if (currentTime.getHours() === 8 && currentTime.getMinutes() === 50) {
  currentMessage = MESSAGES[0];
} else if (currentTime.getHours() === 12 && currentTime.getMinutes() === 30) {
  currentMessage = MESSAGES[1];
} else {
  currentMessage = MESSAGES[2];
}

const sendMessage = async () => {
  try {
    axios.post(
      'https://hooks.slack.com/services/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',
      { text: currentMessage },
      { headers: { 'Content-type': 'application/json' } }
    );
  } catch (error) {
    console.log(error);
  }
};

sendMessage();
