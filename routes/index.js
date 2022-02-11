const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const data = {
    title: '人材データベース'
  }
  res.render('index', data);
});

module.exports = router;
