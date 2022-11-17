import createTable from './createTable.js';

const scoreBoard = document.querySelector('.table-wrapper');
const poplauteTable = (playerScore) => {
  scoreBoard.innerHTML = '';
  const table = document.createElement('table');
  playerScore.forEach((element) => {
    createTable(element, table);
  });
  scoreBoard.appendChild(table);
};

export default poplauteTable;