class Task {
  constructor() {
    this.tasks = {};
  }

  addTask(name, taskKey, actualTask) {
    if (!this.tasks[name]) {
      this.tasks[name] = {};
    }
    this.tasks[name][taskKey] = actualTask;
    this.tasks[name][taskKey];
    return this.tasks;
  }

  deleteTask(name, taskKey) {
    delete this.tasks[name][taskKey];
    return this.tasks;
  }

  existingTask() {
    return this.tasks;
  }
}

const taskDetails = new Task();

console.log(taskDetails.addTask("siddhi", "sleeping", "Sharp 10 O' clock"));
console.log(
  taskDetails.addTask("pratibha", "sessions", "complete all online videos")
);

console.log(taskDetails.addTask("siddhi", "break", "have to go outside "));

console.log(taskDetails.deleteTask("siddhi", "break"));
