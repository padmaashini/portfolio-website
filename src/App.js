import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import Introduction from './components/Introduction/Introduction'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'
const StyledApp = styled.div`
  // margin: 0 10%; 
`

function App() {
  return (
    <StyledApp className="App">
      <Introduction />
      <AboutMe />
      <Experience />
    </StyledApp>
  );
}

export default App;
