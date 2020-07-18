const express = require('express');
require('dotenv').config()
const db = require('./models/index.js');
// const routes = require('./routes');
const routes = require('./routes/api-routes.js');
const path = require('path');
const seeds = require('./seeds.js');
const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set Handlebars.
var exphbs = require("express-handlebars");
// app.set('views', path.join(__dirname, '/views'));
// app.engine('handlebars', exphbs({
//   defaultLayout: 'main',
//   extname: '.handlebars',
//   layoutsDir: './views/layouts'
// }));
// app.set('view engine', 'handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/', routes);


// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync().then(() => {
  // seeds.populateTables(db);
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
