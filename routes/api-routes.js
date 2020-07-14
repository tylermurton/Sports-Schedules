const router = require('express').Router();

router.get('/', (req, res) => res.json('Sample API get endpoint'));

router.post('/create-game', (req, res) => {
  db.Games.create(req.body).then(function(dbGames) {
    res.json(dbGames);
  });
//  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
