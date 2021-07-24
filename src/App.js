import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import{GlobalStyle} from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      Start here.
      <GlobalStyle />
    </div>
  );
}

export default App;
