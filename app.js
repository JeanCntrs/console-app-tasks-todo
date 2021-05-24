require('colors');

const { inquirerMenu } = require('./helpers/inquirer');

console.clear();

const main = async () => {
    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt })

        // opt !== '0' && await pause();
    } while (opt !== '0');
}

main();