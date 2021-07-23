import { gql } from "apollo-server-micro";

export default gql`
  type User {
    id: ID!
    email: String!
    name: String!
    phone: String!
  }

  type Challenge {
    id: ID!
    title: String!
    short_description: String!
    type: String!
    domaine: String!
    technologies: [String]!
    difficulty: String!
    brief: String
    getting_started: String
    ideas: String
    taken: Int
    done: Int
  }

  type Query {
    users: [User]
    user(id: ID!): User
    challenges: [Challenge]
  }

  input CreateInput {
    email: String!
    name: String!
    phone: String!
  }

  input ChallengeInput {
    title: String!
    short_description: String!
    type: String!
    domaine: String!
    technologies: [String]!
    difficulty: String!
    brief: String
    getting_started: String
    ideas: String
    taken: Int
    done: Int
  }

  type Mutation {
    create(input: CreateInput!): User!
    createChallenge(input: ChallengeInput!): Challenge!
  }
`;
