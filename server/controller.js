module.exports = {
  authLogin: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.auth_login([username, password])
      .then(user => {
        console.log("Hoi", user);
        if (user.length !== 0) {
          req.session.username = username;
          req.session.password = password;
          res.status(200).send(user);
        } else {
          res.sendStatus(404);
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  registerUser: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.all_users([username, password]).then(users => {
      console.log(users);
      if (!users.length) {
        db.register_user([username, password]).then(user => {
          res.status(200).send(user);
        });
      } else{
        res.status(409).send(users)
      }
    });
  }
};
