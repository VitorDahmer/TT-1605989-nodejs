import styled from 'styled-components';


export const Container = styled.div `
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  &.cliked{
    color: red;
    border-bottom: solid 3px orange;
  }
  :hover{
      color: orange;
      border-bottom: solid 3px orange;
  }; 
`;