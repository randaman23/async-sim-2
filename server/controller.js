module.exports = {
  authLogin: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.auth_login([username, password]).then(res.sendStatus(200));
  }
};
