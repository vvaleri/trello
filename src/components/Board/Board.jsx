import React from 'react';
import { Button } from '../UI/Button/Button';
import { Container, Head, Title, Buttons, Footer } from './board.style';
import Delete from '../../assets/img/icon-delete.svg';
import Add from '../../assets/img/icon-add.svg';

export const Board = ({ column }) => (
  <Container>
    <Head>
      <Title>
        <img src={column.src} alt="icon" />
        {column.title}
      </Title>
      <Buttons>
        <Button>
          <img src={Delete} alt="удалить" />
        </Button>
      </Buttons>
    </Head>
    <Footer>
      <Button grey>
        <img src={Add} alt="добавить задачу" />
      </Button>
    </Footer>
  </Container>
);
