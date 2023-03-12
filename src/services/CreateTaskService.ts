import { ITasksRepository } from "../repositories/ITasksRepository";


interface IRequest {
  title: string;
  login: string; 
  pass: string;
}

class CreateTaskService {
  constructor( private taskRepository: ITasksRepository ) {}

  execute({ title, login, pass }: IRequest): void {

    const taskExiste = this.taskRepository.verificarTaskDuplicada(title);

    if(taskExiste) {
      throw new Error("Tarefa já existente!")
    }

    this.taskRepository.createTask({ title, login, pass });
  }
}

export { CreateTaskService };