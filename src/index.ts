import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { ProfileAPI } from "./datasources/profile-api";
import { AddressAPI } from "./datasources/address-api";
import { ProfileAdressMapAPI } from "./datasources/profile-address-map-api";
import { ContactAPI } from "./datasources/contact-api";
import { ProfileContactAPI } from "./datasources/profile-contact-map";
import { UserAPI } from "./datasources/user-api";
import { PostAPI } from "./datasources/post-api";
import { CommentAPI } from "./datasources/comment-api";
import { TodoAPI } from "./datasources/todo-api";

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          profileAPI: new ProfileAPI({ cache }),
          addressAPI: new AddressAPI({ cache }),
          contactAPI: new ContactAPI({ cache }),
          profileAddressMapAPI: new ProfileAdressMapAPI({ cache }),
          profileContactMapAPI: new ProfileContactAPI({ cache }),
          userAPI: new UserAPI({ cache }),
          postAPI: new PostAPI({ cache }),
          commentAPI: new CommentAPI({ cache }),
          todoAPI: new TodoAPI({ cache }),
        },
      };
    },
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
