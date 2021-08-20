import React from 'react';
import styled from 'styled-components';
import { Wrapper }  from './Button.styles'


const Button = ({ callback, position, name }) => (
    <Wrapper onClick={callback} position={position}>
        <div>{name}</div>
    </Wrapper>
    
);

export default Button;