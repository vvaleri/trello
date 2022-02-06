import styled from 'styled-components';

const Container = styled.div`
  margin-right: 40px;
  flex: 0 0 290px;

  @media (max-width: 1023px) {
    flex: 0 0 230px;
  }

  @media (max-width: 374px) {
    flex: 0 0 210px;
    margin-right: 20px;
  }

  &.done {
    p {
      text-decoration: line-through;
      text-decoration-color: #3D4044;
      color: #99ADD9;
    }

    span {
      color: #B0B1B2;
    }
  }
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

const Content = styled.ul`
  display: flex;
  flex-direction: column;
  min-height: 20px;
  list-style: none;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 15px;
  padding-bottom: 10px;
`;

export { Container, Head, Title, Content, Footer };
