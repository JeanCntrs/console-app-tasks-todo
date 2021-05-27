const Task = require('./task');
class Tasks {
    list = {};

    constructor() {
        this.list = {};
    }

    createTask(description = '') {
        const task = new Task(description);

        this.list[task.id] = task;
    }
}

module.exports = Tasks;