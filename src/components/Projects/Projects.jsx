import React, { useReducer, useMemo, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Button } from '../UI/Button/Button';
import { Breadcrumbs } from '../UI/Breadcrumbs/Breadcrumbs';
import { Board } from '../Board/Board';
import { InputForm } from '../InputForm/InputForm';
import { initialState } from '../../store';
import { StoreContext } from '../../context';
import { taskReducer } from '../../store/reducer';
import { handleDragnDrop } from '../../dnd';
import { addBoard, deleteBoard } from '../../store/actions';
import { Main, Title, Head, Text, Buttons, Columns, Tip } from './projects.style';
import Waves from '../../assets/img/icon-title.svg';

export const Projects = () => {
  const [boardForm, setBoardForm] = useState(false);

  const [state, dispatch] = useReducer(taskReducer, initialState);
  const stateValue = useMemo(() => ({ dispatch, state }), []);

  const createBoard = newBoard => {
    dispatch(addBoard({ newBoard }));
    setBoardForm(false);
  };

  const removeBoard = id => {
    dispatch(deleteBoard(id));
  };

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    handleDragnDrop(state, dispatch, destination, source, draggableId, type);
  };

  return (
    <StoreContext.Provider value={stateValue}>
      <Main>
        <Title>
          <h1>Проекты</h1>
          <Breadcrumbs currentPage="Процессы" />
        </Title>
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
              createBoard={createBoard}
            />
          </Buttons>
        </Head>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="boards" direction="horizontal" type="board">
            {provided => (
              <Columns
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {
                  state.boardsId.length
                    ? state.boardsId.map((item, index) => {
                      const column = state.boards[item];
                      return (
                        <Board
                          key={item}
                          column={column}
                          index={index}
                          remove={removeBoard}
                        />
                      );
                    })
                    : <Tip>Здесь будут отображаться доски с задачами</Tip>
                }
                {provided.placeholder}
              </Columns>
            )}
          </Droppable>
        </DragDropContext>

      </Main>
    </StoreContext.Provider>
  );
};
