import { request, response, Router } from "express";
import { TaskRepository } from "../repositories/TasksRepository";
import { CreateTaskService } from "../services/CreateTaskService";


const taskRoutes = Router();
const taskRepository = new TaskRepository();

taskRoutes.post("/", (request, response) => {
  const { title, login, pass } = request.body;

  const createTaskService = new CreateTaskService(taskRepository);

  createTaskService.execute({ title, login, pass });

  return response.status(201).send();

});

taskRoutes.get("/", (request, response) => {
  const all = taskRepository.listTasks();

  return response.json(all);
});

export { taskRoutes };