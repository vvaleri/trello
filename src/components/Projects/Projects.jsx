import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button } from '../UI/Button/Button';
import { Board } from '../Board/Board';
import { Main, Title, Head, Text, Columns } from './projects.style';
import Waves from '../../assets/img/icon-title.svg';
import Backlog from '../../assets/img/icon-column-1.svg';
import InProgress from '../../assets/img/icon-column-2.svg';
import Done from '../../assets/img/icon-column-3.svg';
import Passed from '../../assets/img/icon-column-4.svg';

export const Projects = () => {
  const [defaultBoard, setDefaultBoard] = useState([
    {
      id: 1,
      src: Backlog,
      title: 'Беклог'
    },
    {
      id: 2,
      src: InProgress,
      title: 'В работе'
    },
    {
      id: 3,
      src: Done,
      title: 'Выполнена'
    },
    {
      id: 4,
      src: Passed,
      title: 'Сдана'
    }
  ]);

  const addBoard = () => {
    const newBoard = {
      id: nanoid(),
      src: Backlog,
      title: ''
    };

    setDefaultBoard([...defaultBoard, newBoard]);
  };

  const deleteBoard = boardId => {
    setDefaultBoard(defaultBoard.filter(item => item.id !== boardId));
  };

  return (
    <Main>
      <Title>Проекты</Title>
      <Head>
        <Text>
          <img src={Waves} alt="иконка волн" />
          <h2>Процессы проекта CRM - система</h2>
        </Text>
        <Button main type="button" onClick={addBoard}>Добавить столбец</Button>
      </Head>
      <Columns>
        {
        defaultBoard.map(column => (
          <Board key={nanoid()} column={column} deleteBoard={deleteBoard} />
        ))
        }
      </Columns>
    </Main>
  );
};
