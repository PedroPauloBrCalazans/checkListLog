import { Task } from "../model/Task";

interface ICreateTaskDTO {
  title: string;
  login: string;
  pass: string;
}

interface ITasksRepository {
  verificarTaskDuplicada(title: string): Task;
  listTasks(): Task[];
  createTask({ title, login, pass }: ICreateTaskDTO): void;
}

export { ITasksRepository, ICreateTaskDTO };