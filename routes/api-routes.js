const router = require('express').Router();
const Comment = require("../models/index.js");
const db = require('../models/index.js');

console.log("This is comment: ", Comment)



router.get('/', (req, res) => {
  console.log("get /");
  db.Games.findAll({}).then(function(data) {
    console.log('data', data)
    res.render('index', { games: data })
  });
});

router.get('/schedules', (req, res) => {
  console.log("get /");
  db.Games.findAll({}).then(function(data) {
    console.log('data', data)
    res.render('schedules', { games: data })
  });
});

router.get('/scores', (req, res) => {
  console.log("get /");
  db.Games.findAll({}).then(function(data) {
    console.log('data', data)
    res.render('scores', { games: data })
  });
});

// router.post('/create-game', (req, res) => {
//   db.Games.create(req.body).then(function(dbGames) {
//     res.json(dbGames);
//   });
// //  res.sendFile(path.join(__dirname, '../public/index.html'));
// });


// Routes
// =============================================================


  // Get all comments
  router.get("/scores", function(req, res) {

    // Finding all comments, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.Comment.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // // Add a comment
  router.post("/scores", function(req, res) {

    console.log("Comment Data:");
    console.log(req.body);

    db.Comment.create({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created comment
      res.end();
    });

  });

module.exports = router;
