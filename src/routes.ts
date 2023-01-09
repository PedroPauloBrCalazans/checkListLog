import { Request, Response } from "express";
import CreateNewTaskService from "./CreateNewTaskService";

export function createNewTask(request: Request, response: Response) {
    
    CreateNewTaskService.executarNewTask({
        title: "Alelo",
        login: "01744648190",
        pass: "Avell74",
        dateNewTask: new Date()
    });

    return response.send();
}


//request e response e toda a funcao vai ser passado aqui dentro em vez de passar em Server.ts....