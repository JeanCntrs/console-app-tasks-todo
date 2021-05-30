const Task = require('./task');
class Tasks {
    list = {};

    get listArr() {
        const taskList = [];

        Object.keys(this.list).forEach(key => {
            const task = this.list[key];

            taskList.push(task);
        });

        return taskList;
    }

    constructor() {
        this.list = {};
    }

    deleteTask(id = '') {
        if (this.list[id]) {
            delete this.list[id];
        }
    }

    loadTasksFromArr(tasks = []) {
        tasks.forEach(task => {
            this.list[task.id] = task;
        });
    }

    createTask(description = '') {
        const task = new Task(description);

        this.list[task.id] = task;
    }

    fullList() {
        console.log('');
        this.listArr.forEach((task, index) => {
            const number = `${index + 1}`.green;
            const { description, completedAt } = task;
            const state = completedAt ? 'Completado'.green : 'Pendiente'.red;

            console.log(`${number} ${description} :: ${state}`);
        });
    }

    listCompletedPending(completed = true) {
        console.log('');
        let count = 0;
        this.listArr.forEach(task => {
            const { description, completedAt } = task;
            const state = completedAt ? 'Completado'.green : 'Pendiente'.red;

            if (completed) {
                if (completedAt) {
                    count += 1;
                    console.log(`${count.toString().green} ${description} :: ${completedAt.green}`)
                }
            } else {
                if (!completedAt) {
                    count += 1;
                    console.log(`${count.toString().green} ${description} :: ${state}`)
                }
            }
        });
    }

    toggleCompleted(ids = []) {
        ids.forEach(id => {
            const task = this.list[id];
            if (!task.completedAt) {
                task.completedAt = new Date().toISOString();
            }
        });
        console.log(this.listArr)
        this.listArr.forEach(task => {
            if (!ids.includes(task.id)) {
                this.list[task.id].completedAt = null;
            }
        });
    }
}

module.exports = Tasks;