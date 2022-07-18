import styled, { keyframes } from 'styled-components';

const loadLine = keyframes`
from{
    width: 0%;
}
to{
    width: 98%;
}
`;


export const Container = styled.div`
  
  .line{
    margin: 20px;
    height: 6px;
    border-bottom: 2px solid orange;
    animation: ${loadLine} 1.5s linear forwards ;
    position: static;
  }

  .ball{
    border: 2px solid orange;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: orange;
    position: relative;
    bottom: 0px;
    left: 100%;

  }
`;
