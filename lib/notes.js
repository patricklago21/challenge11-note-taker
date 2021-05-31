const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
    return note;
};

// const createNewNote = (note, notesArray) => {
//     notesArray.push(note);

//     fs.writeFileSync(
//         path.join(__dirname, '../db/db.json'),
//         JSON.stringify({ notes: notesArray }, null, 2)
//     );
// };

module.exports = createNewNote;