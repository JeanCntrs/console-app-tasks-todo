require('colors');

const { showMenu, pause } = require('./helpers/messages');

console.clear();

const main = async () => {
    console.log('Hello world');

    showMenu();
    //pause();
}

main();