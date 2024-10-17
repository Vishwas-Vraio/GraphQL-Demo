import { RESTDataSource } from "@apollo/datasource-rest";
import { PostModel } from "../models"

export class PostAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "https://jsonplaceholder.typicode.com/";
  
  getPost(userId: string) {
    return this.get<PostModel[]>(`posts?userId=${userId}`);
  }
}
