import { RESTDataSource } from "@apollo/datasource-rest";
import { ContactModel } from "../models"

export class ContactAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "http://localhost:3005/";
  
  getContact(contactId: string) {
    return this.get<ContactModel>(`contacts/${contactId}`);
  }
}
