import { ProfileAPI } from "./datasources/profile-api";
import { AddressAPI } from "./datasources/address-api";
import { ProfileAdressMapAPI } from "./datasources/profile-address-map-api";
import { ContactAPI } from "./datasources/contact-api";
import { ProfileContactAPI } from "./datasources/profile-contact-map";
import { UserAPI } from "./datasources/user-api";
import { PostAPI } from "./datasources/post-api";
import { CommentAPI } from "./datasources/comment-api";
import { TodoAPI } from "./datasources/todo-api";

export type DataSourceContext = {
  dataSources: {
    profileAPI: ProfileAPI;
    addressAPI: AddressAPI;
    profileAddressMapAPI: ProfileAdressMapAPI;
    contactAPI: ContactAPI;
    profileContactMapAPI: ProfileContactAPI;
    userAPI: UserAPI;
    postAPI: PostAPI;
    commentAPI: CommentAPI;
    todoAPI: TodoAPI;
  };
}
