import React from 'react';
import { Button } from '../UI/Button/Button';
import { Container, Buttons } from './panel.style';
import SearchSVG from '../../assets/img/icon-search.svg';
import PlusSVG from '../../assets/img/icon-plus.svg';
import SquaresSVG from '../../assets/img/icon-squares.svg';
import QueastionSVG from '../../assets/img/icon-question.svg';

export const Panel = () => (
  <Container>
    <Buttons>
      <Button><img src={SearchSVG} alt="icon search" /></Button>
      <Button><img src={PlusSVG} alt="icon plus" /></Button>
      <Button><img src={SquaresSVG} alt="icon menu" /></Button>
    </Buttons>
    <Button><img src={QueastionSVG} alt="icon question" /></Button>
  </Container>
);
