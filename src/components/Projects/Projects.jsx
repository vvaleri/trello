import React, { useReducer, useMemo } from 'react';
import { Button } from '../UI/Button/Button';
import { Board } from '../Board/Board';
import { Main, Title, Head, Text, Columns } from './projects.style';
import { StoreContext } from '../../context';
import Waves from '../../assets/img/icon-title.svg';
import { initialState, taskReducer } from '../../store';

export const Projects = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const stateValue = useMemo(() => ({ dispatch, state }), []);

  return (
    <StoreContext.Provider value={stateValue}>
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
          state.boardsId.map(item => {
            const column = state.boards[item];
            return <Board key={item} column={column} />;
          })
        }
        </Columns>
      </Main>
    </StoreContext.Provider>
  );
};
