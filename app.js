const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

const command = process.argv[2];

//Create add command

yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command

yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
        console.log('Removing the new note!');
    }
})

//Create List command

yargs.command({
    command:'list',
    describe: 'List  notes',
    handler(){
        notes.listNotes()
    }
})

//Create Read command

yargs.command({
    command:'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})



console.log(yargs.argv);