import React from 'react';
import './App.css';
import styled from 'styled-components';
import { ThemeProvider } from '@mui/material';

import Introduction from './components/Introduction/Introduction';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import theme from './theme';

const StyledApp = styled.div`
  // margin: 0 10%; 
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp className="App">
        <Introduction />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
