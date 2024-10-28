const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

const viewsFilePath = path.join(__dirname, 'views.json');
if (!fs.existsSync(viewsFilePath)) {
  fs.writeFileSync(viewsFilePath, JSON.stringify({ '/': 0, '/about': 0 }, null, 2));
}

const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');

app.use(homeRoute);
app.use(aboutRoute);

app.get('/views', (req, res) => {
    res.json(require(viewsFilePath));
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
