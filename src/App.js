import { Header } from './components/Header';
import { Formulary } from './components/Formulary';
import { MainContent } from './components/MainContent';

import UserProvider from './hooks/useUser';

import { GlobalStyle } from './styles/global';

export default function App() {

  return (
    <div>
      <UserProvider>
        <Header />
        <Formulary />
        <MainContent />
        <GlobalStyle />
      </UserProvider>
    </div>
  );
}