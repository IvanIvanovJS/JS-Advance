class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = []
        this.completedTasks = []
    }

    addTask(description, cost, priority) {
        cost = Number(cost);
        priority = Number(priority)
        class Task {
            constructor(description, cost, priority) {
                this.description = description;
                this.cost = cost;
                this.priority = priority;
            }
        }
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`
        } else {
            let currentTask = new Task(description, cost, priority)
            this.budget -= cost;
            this.tasks.push(currentTask)
            return `The task '${description}' has been successfully added to the renovation plan.`
        }

    }
    markTaskAsCompleted(description) {
        let searchedTask = this.tasks.find((task) => task.description === description);
        if (!searchedTask) {
            throw Error(`Task '${description}' not found in the renovation plan.`)
        } else {
            this.tasks = this.tasks.filter((task) => task !== searchedTask);
            this.completedTasks.push(searchedTask)
            return `The task '${description}' has been successfully completed.`
        }
    }
    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return `The priority cannot be zero or negative.`
        }
        let searchedTasks = this.tasks.filter((task) => task.priority >= minimalPriority)
        if (searchedTasks.length > 0) {
            return `You have ${searchedTasks.length} tasks to prioritize.`
        } else {
            return `No tasks found with priority ${minimalPriority} or higher.`
        }
    }
    renovationSummary() {
        if (this.completedTasks.length <= 0) {
            throw Error("No tasks have been completed yet!")
        }
        let result = []
        result.push(`Budget left ${this.budget}.`)
        result.push(`You have completed ${this.completedTasks.length} tasks.`)
        result.push(`Pending tasks in the renovation plan:`)
        for (const task of this.tasks) {
            result.push(`${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`)
        }
        return result.join(`\n`)
    }
}
const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());



