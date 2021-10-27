import React, { useState } from 'react';

import UserProvider from './context/User';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes/themes';
import { Header } from './components/Header';
import { Formulary } from './components/Formulary';
import { MainContent } from './components/MainContent';

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