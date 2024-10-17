import { RESTDataSource } from "@apollo/datasource-rest";
import { UserModel } from "../models"

export class UserAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "https://jsonplaceholder.typicode.com/";
  
  getUser(id: string) {
    return this.get<UserModel>(`users/${id}`);
  }
}
