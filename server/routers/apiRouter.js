const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("API / URL");
    res.send(JSON.stringify("{}"));
});

module.exports = router;
