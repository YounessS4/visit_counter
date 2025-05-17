const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const FILE_PATH = path.join(__dirname, 'counter.json');
const PORT = process.env.PORT || 3000;

function readCounter() {
  try {
    const data = fs.readFileSync(FILE_PATH);
    return JSON.parse(data).visits;
  } catch {
    return 0;
  }
}

function writeCounter(count) {
  fs.writeFileSync(FILE_PATH, JSON.stringify({ visits: count }));
}

app.get('/', (req, res) => {
  let visits = readCounter();
  visits++;
  writeCounter(visits);
  res.send(`Nombre de visites : ${visits}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
