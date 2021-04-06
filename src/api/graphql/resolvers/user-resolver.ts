import { gql } from '@apollo/client';

export default class UserResolver {
    public static GET_ALL_USERS = gql`
    {
  getUsers{
    id,
    first_name,
    second_name,
    username
    email_address,
    is_active
  }
}
   `
}
