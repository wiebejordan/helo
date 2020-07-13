require('dotenv').config();

const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      ctrl = require('./controller'),
      postCtrl = require('./postController'),
      {SERVER_PORT, SESSION_SECRET, DB_URI} = process.env,
      app = express();


app.use(express.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
}));

massive({
    connectionString: DB_URI,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
}).catch(err => console.log(err));

//login endpoints
app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);

//post endpoints
app.get('/api/posts/:userid', postCtrl.getPosts);
app.get('/api/post/:postid', postCtrl.getSinglePost);

app.listen(SERVER_PORT, () => console.log(`Crushing it on port ${SERVER_PORT}`));