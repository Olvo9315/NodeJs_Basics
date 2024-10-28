const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const viewsFilePath = path.join(__dirname, '../views.json');
let pageViews = require(viewsFilePath);

function updateViews(page) {
  pageViews[page] = (pageViews[page] || 0) + 1;
  fs.writeFileSync(viewsFilePath, JSON.stringify(pageViews, null, 2));
}

router.get('/about', (req, res) => {
  updateViews('/about');
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

module.exports = router;