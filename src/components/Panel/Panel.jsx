import React from 'react';
import { Button } from '../UI/Button/Button';
import { Container, Buttons } from './panel.style';
import SearchSVG from '../../assets/img/icon-search.svg';
import PlusSVG from '../../assets/img/icon-plus.svg';
import SquaresSVG from '../../assets/img/icon-squares.svg';
import QueastionSVG from '../../assets/img/icon-question.svg';

const buttons = [
  { src: SearchSVG, alt: 'white magnifier' },
  { src: PlusSVG, alt: 'white plus' },
  { src: SquaresSVG, alt: 'white Rubik`s Cube' }
];

export const Panel = () => (
  <Container>
    <Buttons>
      {buttons.map(button => (
        <Button
          key={button.alt}
        >
          <img src={button.src} alt={button.alt} />
        </Button>
      ))}
    </Buttons>
    <Button><img src={QueastionSVG} alt="white question within circle" /></Button>
  </Container>
);
