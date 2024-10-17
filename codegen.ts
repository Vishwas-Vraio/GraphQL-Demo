import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context#DataSourceContext",
        mappers: {
          Profile: "./models#ProfileModel",
          Address: "./models#AddressModel",
          ProfileAddressMap: "./models#ProfileAddressModel",
          User: "./models#UserModel",
          PostT: "./models#PostModel",
          Comment: "./models#CommentModel",
          Todo: "./models#TodoModel",
        },
      },
    },
  },
};

export default config;
