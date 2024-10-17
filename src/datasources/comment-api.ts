import { RESTDataSource } from "@apollo/datasource-rest";
import { CommentModel } from "../models"

export class CommentAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "https://jsonplaceholder.typicode.com/";
  
  getComment(id: string) {
    return this.get<CommentModel[]>(`comments?postId=${id}`);
  }
}
