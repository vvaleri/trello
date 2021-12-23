import React from 'react';
import { Task } from '../Task/Task';
import { Button } from '../UI/Button/Button';
import { Container, Head, Title, Content, Buttons, Footer } from './board.style';
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
    <Content>
      {
        column.taskCards.length > 0
        && column.taskCards.map(card => (
          <Task key={card.id} card={card} />
        ))
      }
    </Content>
    <Footer>
      <Button grey>
        <img src={Add} alt="добавить задачу" />
      </Button>
    </Footer>
  </Container>
);
