import './style.css';
import { addNewData, getScoresList } from './modules/api.js';

const form = document.querySelector('#form');
const refreshBtn = document.querySelector('.refresh');

getScoresList();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = form.playerName.value.trim();
  const playerScore = form.playerScore.value;
  if (playerName && playerScore) {
    addNewData(playerName, playerScore);
    form.playerName.value = '';
    form.playerScore.value = '';
  }
});