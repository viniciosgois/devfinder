import { useContext } from 'react';
import { UserContext } from '../context/User';

export function useUser() {
  const context = useContext(UserContext);
  const { users, setUsers } = context;

  return { users, setUsers };

}
