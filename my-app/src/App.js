import React from 'react';
import './App.css';
import Button from './components/Button';
import styled from 'styled-components';

function App() {
  
  let round = 0; 
  
  const buttonClick = () => console.log('hello');

  return (
    <div>
      <Button type='button' position='topleft' color='red' callback={buttonClick} /> 
      <Button type='button' position='topright' color='blue' callback={buttonClick} />
      <Button type='button' position='bottomleft' color='green' callback={buttonClick} />
      <Button type='button' position='bottomright' color='yellow' callback={buttonClick} />
    </div>
  );
}

export default App;

