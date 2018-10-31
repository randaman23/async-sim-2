module.exports = {
  authLogin: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.auth_login([username, password])
      .then(console.log("Hoi", res.data))
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
