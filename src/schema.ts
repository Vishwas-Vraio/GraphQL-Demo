import gql from 'graphql-tag';

export const typeDefs = gql`
  # Query to fetch profile and related address by profileId
  type Query {
    getProfileWithAddress(profileId: ID!): ProfileWithAddressResponse!
    getProfile(profileId: ID!): Profile!
    getUserDetails(id: ID!): User!
  }

  # Mutation to create both profile and address
  type Mutation {
    createProfileWithAddress(
      profileInput: ProfileInput!,
      addressInput: AddressInput!
    ): CreateProfileWithAddressResponse!
  }

  # Response type for createProfileWithAddress mutation
  type CreateProfileWithAddressResponse {
    code: Int!
    success: Boolean!
    message: String!
    profile: Profile
    address: Address
  }

  # Response type for getProfileWithAddress query
  type ProfileWithAddressResponse {
    code: Int!
    success: Boolean!
    message: String!
    profile: Profile
    addresses: [Address]
  }

  # Profile type definition
  type Profile {
    profileId: ID!
    firstName: String!
    lastName: String!
    middleName: String
    email: String!
    dateOfBirth: String!
    status: String!
    address: [Address!]!
    contacts: [Contact!]!
  }

  # Address type definition
  type Address {
    addressId: ID!
    addressLineOne: String!
    addressLineTwo: String
    addressLineThree: String
    city: String!
    state: String!
    country: String!
    postalCode: String!
    latitude: String
    longitude: String
  }

  type Contact {
    contactId: ID!
    contactValue: String!
    contactType: String!
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    todos: [Todo!]!
    posts: [PostT!]!
  }

  type Comment {
    postId: ID!
    id: ID!
    body: String!
  }
  
  type PostT {
    userId: ID!
    id: ID!
    title: String!
    comments: [Comment!]!
  }

  type Todo {
    userId: ID!
    id: ID!
    title: String!
  }
  

  # ProfileAddressMap type definition
  type ProfileAddressMap {
    profileId: ID!
    addressId: ID!
  }
  
  type ProfileAddressMapResponse {
    addressId: ID!
  }

  type ProfileContactMapResponse {
    contactId: ID!
  }

  # Input type for creating a profile
  input ProfileInput {
    firstName: String!
    lastName: String!
    middleName: String
    email: String!
    dateOfBirth: String!
  }

  # Input type for creating an address
  input AddressInput {
    addressLineOne: String!
    addressLineTwo: String
    addressLineThree: String
    city: String!
    state: String!
    country: String!
    postalCode: String!
    latitude: Float
    longitude: Float
  }
`;
