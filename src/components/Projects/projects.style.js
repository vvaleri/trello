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
  margin-bottom: 10px;
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

const Buttons = styled.div`
  position: relative;
`;

const Columns = styled.div`
  display: flex;
  padding-bottom: 30px;
  overflow-x: auto;
  scrollbar-color: #3E65BE #B0B1B2;

  ::-webkit-scrollbar {
    height: 12px;
    width: 12px;
    background-color: #B0B1B2;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #3E65BE;
  }
`;

const Tip = styled.p`
  width: 100%;
  text-align: center;
  color: #a4a0a0;
`;

export { Main, Title, Head, Text, Buttons, Columns, Tip };
