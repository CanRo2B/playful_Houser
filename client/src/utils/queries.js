import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User {
    User {
      _id
      username
      email
      password
      landlord
      contact
      properties 
    }
  }
`;

export const QUERY_PROPERTY = gql`
  query property($_id: String) {
    property(_id: $_id) {
      _id
      nickname
      rent
      image
      due
    }
  }
`;
