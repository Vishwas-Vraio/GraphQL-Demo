import { RESTDataSource } from "@apollo/datasource-rest";
import { TodoModel } from "../models"

export class TodoAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "https://jsonplaceholder.typicode.com/";
  
  getTodo(id: string) {
    return this.get<TodoModel[]>(`todos?userId=${id}`);
  }
}
