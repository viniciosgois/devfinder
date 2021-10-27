<<<<<<< HEAD
import { useContext } from 'react';
import { UserContext } from '../context/User';
=======
import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [users, setUsers] = useState({});

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>

    
  );
}
>>>>>>> ac8d9ab4bdd36b8e7342b0c951ec909218236444

export function useUser() {
  const context = useContext(UserContext);
  const { users, setUsers } = context;

  return { users, setUsers };

}
