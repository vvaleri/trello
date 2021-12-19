import React, { useState } from 'react';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { Container, Head, Title, Buttons } from './board.style';
import Edit from '../../assets/img/icon-edit.svg';
import Delete from '../../assets/img/icon-delete.svg';

export const Board = ({ column, deleteBoard }) => {
  const [titleBoard, setTitleBoard] = useState(`${column.title}`);
  const [activeInput, setActiveInput] = useState(false);

  const isInputEdit = () => setActiveInput(true);

  return (
    <Container>
      <Head>
        <Title>
          <img src={column.src} alt="icon" />
          <Input
            main
            className={activeInput ? 'active' : ''}
            value={titleBoard}
            onChange={e => setTitleBoard(e.target.value)}
          />
        </Title>
        <Buttons>
          <Button onClick={isInputEdit}>
            <img src={Edit} alt="редактировать" />
          </Button>
          <Button onClick={() => deleteBoard(column.id)}>
            <img src={Delete} alt="удалить" />
          </Button>
        </Buttons>
      </Head>
    </Container>
  );
};
