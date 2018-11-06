module.exports = {
  authLogin: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.auth_login([username, password])
      .then(user => {
        console.log("Hoi", user);
        if (user.length !== 0) {
          req.session.user = user;
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
    db.all_users([username, password])
      .then(users => {
        console.log(users);
        if (!users.length) {
          db.register_user([username, password]).then(user => {
            res.status(200).send(user);
          });
        } else {
          res.status(200).send(users);
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send("Sesh Destroyed");
  },
  getHouses: (req, res) => {
    const db = req.app.get("db");
    db.get_houses([req.session.user[0].user_id])
      .then(houses => {
        console.log(houses);
        res.status(200).send(houses);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
