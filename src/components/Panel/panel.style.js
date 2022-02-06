import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  background-color: #223A45;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  
  button {
    margin-bottom: 15px;
  }
`;

export { Container, Buttons };
