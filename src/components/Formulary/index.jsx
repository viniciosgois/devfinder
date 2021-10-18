import { useState } from 'react';
import { useUser } from '../../hooks/useUser';

import api from '../../services/api';

import { AiOutlineSearch } from 'react-icons/ai';
import { Container } from './styles';

export function Formulary() {
  const [query, setQuery] = useState('');
  const { setUsers } = useUser();

  function handleSubmit(e) {
    e.preventDefault();
    
    api.get(`${query}`)
    .then((response) => setUsers(response.data))
    
    setQuery('');
  }

  return (
    <Container>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <AiOutlineSearch />
          <input
            placeholder="Search Github username... " 
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button className="btn-submit" type="submit">Search</button>
        </form>
      </div>
    </Container>
  );
}