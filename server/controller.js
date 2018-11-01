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
  }
};
