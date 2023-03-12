import { Task } from "../model/Task";
import { ICreateTaskDTO, ITasksRepository } from "./ITasksRepository";


class TaskRepository implements ITasksRepository {

  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  createTask({ title, login, pass }: ICreateTaskDTO): void {
    const task = new Task();

    Object.assign(task, {
      title,
      login,
      pass,
      dateNewTask: new Date()
    });

    this.tasks.push(task);
  }

  listTasks(): Task[] {
    return this.tasks;
  }

  verificarTaskDuplicada(title: string): Task {
    const task = this.tasks.find(task => task.title === title);
    return task;
  }
}

export { TaskRepository };