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
app.post('/auth/logout', ctrl.logout);

//post endpoints
app.get('/api/posts', postCtrl.getPosts);
app.get('/api/post/:postid', postCtrl.getSinglePost);
app.post('/api/post/', postCtrl.newPost);
app.delete('/api/post/:postid', postCtrl.deletePost);

app.get('/api/auth/me', ctrl.keepUser);

app.listen(SERVER_PORT, () => console.log(`Crushing it on port ${SERVER_PORT}`));