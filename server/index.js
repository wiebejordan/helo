require('dotenv').config();

const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controller'),
      {SERVER_PORT, SESSION_SECRET, DB_URI} = process.env,
      app = express();


app.use(express.json());

massive({
    connectionString: DB_URI,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
}).catch(err => console.log(err));

app.listen(SERVER_PORT, () => console.log(`Crushing it on port ${SERVER_PORT}`));