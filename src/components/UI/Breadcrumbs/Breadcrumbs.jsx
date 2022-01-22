import React from 'react';
import { Container, List, Link } from './breadcrumbs.style';
import Icon from '../../../assets/img/icon-breadcrumbs.svg';

export const Breadcrumbs = ({ currentPage }) => (
  <Container>
    <img src={Icon} alt="icon play" />
    <List>
      <li>
        <Link href="#">CRM - система</Link>
      </li>
      <li>
        <span>{currentPage}</span>
      </li>
    </List>
  </Container>
);
