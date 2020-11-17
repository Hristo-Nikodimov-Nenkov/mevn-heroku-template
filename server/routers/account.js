const router = require("express").Router();
const {account} = require("./../controllers");
const {security} = require("./../services");

router.post("/register", account.register);
router.post("/login", account.login);
router.get("/logout", security.authenticated, account.logout);
router.get("/profile", security.authenticated, account.profile);

module.exports = router;
