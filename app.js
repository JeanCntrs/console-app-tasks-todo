require('colors');

const { inquirerMenu, pause, readInput, listTaaskToDelete, confirm } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/dbFuntions');
const Tasks = require('./models/tasks');

const main = async () => {
    let opt = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if (tasksDB) {
        tasks.loadTasksFromArr(tasksDB);
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const description = await readInput('Descripción:');

                tasks.createTask(description);
                break;

            case '2':
                tasks.fullList();
                break;

            case '3':
                tasks.listCompletedPending(true)
                break;

            case '4':
                tasks.listCompletedPending(false);
                break;

            case '6':
                const id = await listTaaskToDelete(tasks.listArr);

                if (id !== '0') {
                    const ok = await confirm('¿Estás Seguro?');
                    
                    if (ok) {
                        tasks.deleteTask(id);
                        console.log('Tarea borrada');
                    }
                }

                break;
        }

        saveDB(tasks.listArr);

        await pause();
    } while (opt !== '0');
}

main();