import React from 'react';
import { Background, Header, Content, Sidebar } from './components/ContainerComponents';

const App = () => {

  return (
    <Background>
      <Header />
      <Sidebar />
      <Content />
    </Background>
  );
}

export default App;


