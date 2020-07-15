module.exports = {
    getPosts: (req, res) => {
         const db = req.app.get('db');
               console.log(req.query)
      
      if(!req.query.title && req.query.userPosts === 'true'){
        
        db.posts.get_all_posts()
        
        .then(posts => res.status(200).send(posts))
        .catch(err => res.status(500).send(err));
      } 
      else if(!req.query.title && req.query.userPosts === 'false'){
        
        db.posts.get_no_user_posts(req.session.userid.user_id)
        
        .then(posts => res.status(200).send(posts))
        .catch(err => res.status(500).send(err));
      }  
      else if(req.query.title && req.query.userPosts === 'false'){
        db.posts.get_no_user_search_posts(req.session.userid.user_id, req.query.title)

        .then(posts => res.status(200).send(posts))
        .catch(err => res.status(500).send(err));
      }
      
      else {
        db.posts.get_search_posts(req.query.title)
      
      .then(posts => res.status(200).send(posts))
      .catch(err => res.status(500).send(err));}
      // console.log(req.session)
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
            {title, img, content, author_id} = req.body;
             

      db.posts.new_post( title, img, content, author_id)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err))
      // console.log(req.session.userid.user_id)
    },

    deletePost: (req, res) => {
      const db = req.app.get('db'),
            {postid} = req.params;

      db.posts.delete_post(postid)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err));

    }




}