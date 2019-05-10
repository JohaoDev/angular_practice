const express = require('express');
const bodyParser = require('body-parser');
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
app.put('/pers/:pers_sec', routesCtrl.put)
app.delete('/pers/:pers_sec', routesCtrl.kill)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});