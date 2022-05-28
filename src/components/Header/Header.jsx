import React from 'react';
import { Container, Logo, Panel, AccountInfo, User } from './header.style';
import IconLogo from '../../assets/img/logo.svg';
import Bell from '../../assets/img/icon-bell.svg';
import Arrow from '../../assets/img/icon-arrow.svg';
import Person from '../../assets/img/photo-1.png';

export const Header = () => (
  <Container>
    <Logo>
      <img src={IconLogo} alt="белая шестерёнка - логотип eveli.todo" />
      <span>eveli.todo</span>
    </Logo>
    <Panel>
      <AccountInfo>
        <span>60 000 &#8381;</span>
        <img src={Bell} alt="серый колокол" />
      </AccountInfo>
      <User>
        <img src={Person} alt="фотография пользователя" />
        <span>Назир</span>
        <img src={Arrow} alt="белая стрелка вниз" />
      </User>
    </Panel>
  </Container>
);
