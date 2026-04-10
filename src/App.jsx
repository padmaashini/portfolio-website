import React from 'react';
import './App.css';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

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
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <StyledApp className="App">
          <Introduction />
          <AboutMe />
          {/* removing experience for now since it can be found in resume */}
          {/* keeping in code for now */}
          {/* <Experience /> */}
          <Projects />
          <Contact />
        </StyledApp>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
