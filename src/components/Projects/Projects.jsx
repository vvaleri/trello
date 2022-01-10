import React, { useReducer, useMemo, useState } from 'react';
import { Button } from '../UI/Button/Button';
import { Board } from '../Board/Board';
import { InputForm } from '../InputForm/InputForm';
import { Main, Title, Head, Text, Buttons, Columns, Tip } from './projects.style';
import { StoreContext } from '../../context';
import Waves from '../../assets/img/icon-title.svg';
import { initialState, taskReducer } from '../../store';

export const Projects = () => {
  const [boardForm, setBoardForm] = useState(false);

  const [state, dispatch] = useReducer(taskReducer, initialState);
  const stateValue = useMemo(() => ({ dispatch, state }), []);

  const addBoard = newBoard => {
    dispatch({
      type: 'ADD BOARD',
      payload: { newBoard }
    });
    setBoardForm(false);
  };

  const removeBoard = id => {
    dispatch({
      type: 'DELETE BOARD',
      payload: id
    });
  };

  return (
    <StoreContext.Provider value={stateValue}>
      <Main>
        <Title>Проекты</Title>
        <Head>
          <Text>
            <img src={Waves} alt="иконка волн" />
            <h2>Процессы проекта CRM - система</h2>
          </Text>
          <Buttons>
            <Button
              main
              type="button"
              onClick={() => setBoardForm(true)}
            >
              Добавить столбец
            </Button>
            <InputForm
              main
              type="board"
              visible={boardForm}
              setVisible={setBoardForm}
              createBoard={addBoard}
            />
          </Buttons>
        </Head>
        <Columns>
          {
          state.boardsId.length
            ? state.boardsId.map(item => {
              const column = state.boards[item];
              return <Board key={item} column={column} remove={removeBoard} />;
            })
            : <Tip>Здесь будут отображаться доски с задачами</Tip>
        }
        </Columns>
      </Main>
    </StoreContext.Provider>
  );
};
