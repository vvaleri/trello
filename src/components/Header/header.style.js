import styled from 'styled-components';

const Container = styled.header`
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  background-color: #253F4B;
  color: #fff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }

  span {
    font-size: 18px;
  }
`;

const Panel = styled.div`
  display: flex;
`;

const AccountInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;

  span {
    margin-right: 20px;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 5px;
    margin-left: 5px;
  }
`;

export { Container, Logo, Panel, AccountInfo, User };
