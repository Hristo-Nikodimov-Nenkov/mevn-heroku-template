const router = require("express").Router();
const {notes} = require("./../services");

router.get("/", notes.getAll);
router.get("/:noteId", notes.getNote);
router.post("/", notes.createNote);
router.put("/:noteId", notes.updateNote);
router.delete("/:noteId", notes.deleteNote);

module.exports = router;
