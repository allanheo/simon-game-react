import React from 'react';
import styled from 'styled-components';
import { Wrapper }  from './Button.styles'


const Button = ({ callback, position, color }) => (
    <Wrapper onClick={callback} position={position}>
        {position}
    </Wrapper>
    
);

export default Button;