const express = require('express');
const app = express();
const port = 3000;

const players = ["José", "Maria", "João", "Marcos", "Fernanda"];

let currentIndex = 0;

app.get('/', (req, res) => {
  res.send(`It's ${players[currentIndex]}'s turn to play!`);

  currentIndex = (currentIndex + 1) % players.length;
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
