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

export function useUser() {
  const context = useContext(UserContext);
  const { users, setUsers } = context;

  return { users, setUsers };

}
