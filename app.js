require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveDB } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

const main = async () => {
    let opt = '';
    const tasks = new Tasks();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const description = await readInput('Descripción:');

                tasks.createTask(description);
                break;

            case '2':
                console.log(tasks.listArr)
                break;
        }

        //saveDB(tasks.listArr);

        await pause();
    } while (opt !== '0');
}

main();