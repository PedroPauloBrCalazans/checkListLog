import { v4 as uuidV4 } from "uuid";


class Task {
  id?: string;
  title: string;
  login: string;
  pass: string;
  dateNewTask: Date;

  constructor() {
    if(!this.id){
      this.id = uuidV4();
    }
  }
}

export { Task };