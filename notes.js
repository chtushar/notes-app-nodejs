const fs= require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your Notes...."
}



const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        savedNotes(notes);
        console.log('New note added!');
    }else{
        console.log('Note Title Taken!!');
    }
}

const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
    
        return JSON.parse(dataJSON)   
    } catch (e) {
        return []
    }
    
}



const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse.bold('Note Removed'));
        savedNotes(notesToKeep);
    }else{
        console.log(chalk.red.inverse.bold('No note found!'));
    }
}



const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellowBright.inverse.bold("Your Notes.."));
    notes.forEach(note => console.log(chalk.yellowBright(note.title)));
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title == title);

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else{
        console.log(chalk.red.inverse('Note not found!'));
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}