const router = require('express').Router();
const apiRoutes = require('./api-routes');
const db = require('../models/index.js')

router.use('/api', apiRoutes);


router.get('/', (req, res) => {
  console.log("get /");
  db.Games.findAll({}).then(function(data) {
    console.log('data', data)
    res.render('index', { games: data })
  });
});

module.exports = router;
