
/**
 * title - string
 * login - string
 * pass - string
 * dateNewTask - date
 */

interface Task {
    title: string;
    login: string; 
    pass?: string;
    dateNewTask: Date;
}


class CreateNewTaskService {
    
    executarNewTask({ title, login, pass = "0", dateNewTask }: Task) {

        console.log(title, login, pass, dateNewTask);
    }
}

export default new CreateNewTaskService(); // new e para não precisar instaciar ele.....