const express = require('express');
const bodyParser = require('body-Parser');
const cors = require('cors');
const PORT = process.env.PORT || 8001;
const knex = require('./knex/knex.js');

const routesCtrl = require('./routesCtrl');

const app = express();

app.use(express.static('cliente'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// RUTAS
app.get('/pers', routesCtrl.getAll)
app.post('/pers', routesCtrl.post)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});