import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button } from '../UI/Button/Button';
import { Board } from '../Board/Board';
import { Main, Title, Head, Text, Columns } from './projects.style';
import { taskBoards } from '../../store';
import Waves from '../../assets/img/icon-title.svg';

export const Projects = () => {
  const [defaultBoard, setDefaultBoard] = useState(taskBoards);

  return (
    <Main>
      <Title>Проекты</Title>
      <Head>
        <Text>
          <img src={Waves} alt="иконка волн" />
          <h2>Процессы проекта CRM - система</h2>
        </Text>
        <Button main type="button">Добавить столбец</Button>
      </Head>
      <Columns>
        {
        defaultBoard.boardsId.map(item => {
          const column = defaultBoard.boards[item];
          return <Board key={nanoid()} column={column} />;
        })
        }
      </Columns>
    </Main>
  );
};
