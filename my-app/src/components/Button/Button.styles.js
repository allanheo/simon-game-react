import styled from 'styled-components';

export const Wrapper = styled.button`
    position: absolute;
    left: ${props => (props.position === 'topleft' || props.position === 'bottomleft' ? '20px' : '120px')};
    top: ${props => (props.position === 'topleft' || props.position === 'topright' ? '20px' : '70px')};
    background: ${({ color }) => color || "red"};
    color: black; //${props => props.color};
    border: 1px solid black;
    border-radius: 10px;
    width: 100px;
    height: 50px;
    cursor: pointer;
`;