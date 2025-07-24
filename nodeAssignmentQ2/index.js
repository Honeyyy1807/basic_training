const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const FILE_PATH = path.join(__dirname, 'data.json');


if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, JSON.stringify({}), 'utf-8');
}

app.use(express.json());


app.get('/data', (req, res) => {
  fs.readFile(FILE_PATH, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read file' });
    }

    res.status(200).send(data); 
  });
});


app.post('/data', (req, res) => {
  try {
    const jsonData = req.body;

    fs.appendFile(FILE_PATH, JSON.stringify(jsonData, null, 2), 'utf-8', (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to write file' });
      }

      res.status(200).json({ message: 'Data saved successfully' });
    });

  } catch (err) {
    res.status(400).json({ error: 'Invalid JSON' });
  }
});


app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
