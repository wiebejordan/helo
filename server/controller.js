const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res) => {
    const {username, password, profilePicture} = req.body,
          db = req.app.get('db');
    
    const foundUser = await db.check_user({username});
    if(foundUser[0]){
      return res.status(400).send('Username already exists.')
    }

    let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt);

    const newUser = await db.register_user({username, password: hash, profilePicture});
    req.session.userid = newUser[0];
    res.status(201).send(req.session.userid);
  },

  login: async (req, res) => {
    const {username, password} = req.body,
          db = req.app.get('db');
    
    const foundUser = await db.check_user({username});
    if(!foundUser[0]){
      return res.status(400).send('Username does not exist');
    }

    const authenticated = bcrypt.compareSync(password, foundUser[0].password);
    if(!authenticated){
      return res.status(401).send('Password incorrect')
    }

    delete foundUser[0].password;
    req.session.userid = foundUser[0];
    res.status(202).send(req.session.userid);
    console.log(req.session.userid)
    
    
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
    console.log('logged out!')
  },

  keepUser: (req, res) => {
    const db = req.app.get('db');
        

    db.get_user(req.session.userid.user_id)

    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send(err));
    // console.log(req.session.userid)
  }

}