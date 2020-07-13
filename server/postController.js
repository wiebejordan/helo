module.exports = {
    getPosts: (req, res) => {
         const db = req.app.get('db'),
              {userid} = req.params;
      
              console.log(req.query)

      db.posts.get_posts(userid)
      
      .then(posts => res.status(200).send(posts))
      .catch(err => res.status(500).send(err));
      
    }




}