import styled from 'styled-components';

const Main = styled.main`
  padding: 40px;
`;

const Title = styled.h1`
  margin-bottom: 35px;
  font-size: 24px;
  font-family: RubikBold, sans-serif;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #979797;
`;

const Text = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }

  h2 {
    font-family: RubikMedium, sans-serif;
    font-size: 16px;
  }
`;

export { Main, Title, Head, Text };
