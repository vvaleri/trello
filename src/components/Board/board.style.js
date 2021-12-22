import styled from 'styled-components';

const Container = styled.div`
  margin-right: 40px;
  flex: 0 0 290px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 10px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;

  img {
    margin-right: 5px;
  }
  
`;

const Buttons = styled.div`
  display: flex;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export { Container, Head, Title, Buttons, Footer };
