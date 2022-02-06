import styled from 'styled-components';

const Main = styled.main`
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 40px;
  padding-left: 120px;

  @media (max-width: 767px) {
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 80px;
  }

`;

const Title = styled.div`
  display: flex;
  margin-bottom: 35px;

  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 25px;
  }

  h1 {
    font-size: 24px;
    font-family: RubikBold, sans-serif;

    @media (max-width: 767px) {
      margin-bottom: 10px;
    }
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #979797;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    margin-bottom: 15px;
  }

  img {
    margin-right: 10px;
  }

  h2 {
    font-family: RubikMedium, sans-serif;
    font-size: 16px;

    @media (max-width: 374px) {
      font-size: 14px;
    }
  }
`;

const Buttons = styled.div`
  position: relative;

  @media (max-width: 767px) {
    align-self: flex-start;
  }
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
