const router = require("express").Router();
const {account} = require("./../services");

router.post("/register", account.register);
router.post("/login", account.login);

module.exports = router;
