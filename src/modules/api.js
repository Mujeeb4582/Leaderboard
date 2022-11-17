import poplauteTable from './populateTable.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const apiKey = 'gPaICDgdmVhqNJQa3k5i';
const gameUrl = `${baseUrl}${apiKey}/scores/`;

const addNewData = async (pName, pScore) => {
  await fetch(gameUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: pName,
      score: pScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const msg = document.querySelector('h4');
      msg.innerHTML = json.result;
      msg.style.backgroundColor = '#fff';
      msg.style.color = 'green';
      setTimeout(() => {
        msg.style.display = 'none';
      }, 5000);
    });
};

const getScoresList = async () => {
  await fetch(gameUrl)
    .then((response) => response.json())
    .then((json) => {
      poplauteTable(json.result.sort((a, b) => b.score - a.score));
    });
};

export { addNewData, getScoresList };