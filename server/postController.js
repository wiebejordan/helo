module.exports = {
    getPosts: (req, res) => {
         const db = req.app.get('db'),
              {userid} = req.params;
      
              

      db.posts.get_posts(userid)
      
      .then(posts => res.status(200).send(posts))
      .catch(err => res.status(500).send(err));
      
    },

    getSinglePost: (req, res) => {
      const db = req.app.get('db'),
          {postid} = req.params;
          

      db.posts.get_single_post(postid)


      .then(post => res.status(200).send(post))
      .catch(err => res.status(500).send(err));
    },

    newPost: (req, res) => {
      const db = req.app.get('db'),
            {userid} = req.params,
            {title, img, content} = req.body;

      db.posts.new_post( title, img, content, userid)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err))
    },

    deletePost: (req, res) => {
      const db = req.app.get('db'),
            {postid} = req.params;

      db.posts.delete_post(postid)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err));

    }




}