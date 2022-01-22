import React from 'react';
import { Container, Logo, Panel, AccountInfo, User } from './header.style';
import IconLogo from '../../assets/img/logo.svg';
import Bell from '../../assets/img/icon-bell.svg';
import Arrow from '../../assets/img/icon-arrow.svg';
import Person from '../../assets/img/photo-1.png';

export const Header = () => (
  <Container>
    <Logo>
      <img src={IconLogo} alt="logo eveli todo" />
      <span>eveli.todo</span>
    </Logo>
    <Panel>
      <AccountInfo>
        <span>60 000 &#8381;</span>
        <img src={Bell} alt="icon bell" />
      </AccountInfo>
      <User>
        <img src={Person} alt="user" />
        <span>Назир</span>
        <img src={Arrow} alt="icon arrow" />
      </User>
    </Panel>
  </Container>
);
