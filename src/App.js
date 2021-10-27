<<<<<<< HEAD
import React, { useState } from 'react';

import UserProvider from './context/User';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes/themes';
=======
>>>>>>> ac8d9ab4bdd36b8e7342b0c951ec909218236444
import { Header } from './components/Header';
import { Formulary } from './components/Formulary';
import { MainContent } from './components/MainContent';

<<<<<<< HEAD
import { GlobalStyle } from './styles/global';

export default function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <UserProvider>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header theme={theme} setTheme={setTheme}/>
        <Formulary />
        <MainContent />
      </ThemeProvider>
    </UserProvider>
  );
};
=======
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
>>>>>>> ac8d9ab4bdd36b8e7342b0c951ec909218236444
