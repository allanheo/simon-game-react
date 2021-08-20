import React from 'react';
import './App.css';
import Button from './components/Button';
import styled from 'styled-components';

function App() {
  
  const Room = styled.div`
  // position: relative;
  // width: 500px;
  // height: 500px;
  // border: 10px solid black;
  // margin: 0 auto;
  `;

  return (
  <Room>
    <Button type='button'/> 
    <Button type='button'/>
    <Button type='button'/><Button type='button'/><Button type='button'/>
  </Room>  
  );
}

export default App;

