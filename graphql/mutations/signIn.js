import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser($create_user_input: CreateInput!) {
    create(input: $create_user_input) {
      name
      email
      phone
    }
  }
`;

export default CREATE_USER;
