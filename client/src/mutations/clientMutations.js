import { gql } from "@apollo/client";

export const DELETE_CLIENT = gql`
  mutation deleClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      client
      phone
    }
  }
`;
