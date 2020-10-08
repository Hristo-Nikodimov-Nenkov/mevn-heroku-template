const router = require("express").Router();
const accountsService = require("./../services/accountsService");

router.get("/register", accountsService.registerGet);
router.post("/register", accountsService.registerPost);

router.post("/login", accountsService.loginPost);

router.get("/profile",accountsService.profileGet);

module.exports = router;
