import styled from 'styled-components';

const Container = styled.header`
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  background-color: #253F4B;
  color: #fff;

  @media (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }

  span {
    font-size: 18px;

    @media (max-width: 767px) {
      display: none;
    }
  }
`;

const Panel = styled.div`
  display: flex;
`;

const AccountInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;

  @media (max-width: 767px) {
    margin-right: 10px;
  }

  span {
    margin-right: 20px;

    @media (max-width: 767px) {
      margin-right: 10px;
    }
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 5px;
    margin-left: 5px;

    @media (max-width: 767px) {
      display: none;
    }
  }

  img {
    @media (max-width: 767px) {
      margin-left: 5px;
    }
  }
`;

export { Container, Logo, Panel, AccountInfo, User };
