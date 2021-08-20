import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

const LightSwitch = ({ callback, position, switchOn }) => (
    <Button onClick={callback} position={position}>
        <div>hello</div>
    </Button>
);

export default Button;