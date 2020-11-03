function getAll(req, res) {
    res.status(200).send(JSON.stringify([]));
}

function getNote(req, res) {
    res.status(200)
        .send(
            JSON.stringify({
                    id: req.params.noteId
                }
            ));
}

function createNote(req, res) {
    res.status(201)
        .send(
            JSON.stringify(
                {
                    id: req.params.noteId,
                    note: req.body
                }
            ));
}

function updateNote(req, res) {
    res.status(200)
        .send(
            JSON.stringify(
                {
                    id: req.params.noteId,
                    note: req.body
                }
            ));
}

function deleteNote(req, res) {
    res.status(200)
        .send(`Note with id: ${req.params.id} deleted.`);
}

module.exports = {
    getAll,
    getNote,
    createNote,
    updateNote,
    deleteNote
}
