import React, { useReducer, useMemo, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Button } from '../UI/Button/Button';
import { Board } from '../Board/Board';
import { InputForm } from '../InputForm/InputForm';
import { Main, Title, Head, Text, Buttons, Columns, Tip } from './projects.style';
import { StoreContext } from '../../context';
import Waves from '../../assets/img/icon-title.svg';
import { initialState, taskReducer } from '../../store';
// import { moveTask } from '../../dnd';

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

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    // const newArrTask = moveTask(state, destination, source, draggableId);
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId
          && destination.index === source.index) {
      return;
    }

    const sourceBoard = state.boards[source.droppableId];
    const destinationBoard = state.boards[destination.droppableId];

    const sourceTaskArr = Array.from(sourceBoard.taskCards);
    const movedTask = sourceTaskArr.filter(task => task.id === draggableId)[0];

    if (sourceBoard === destinationBoard) {
      sourceTaskArr.splice(source.index, 1);
      sourceTaskArr.splice(destination.index, 0, movedTask);

      dispatch({
        type: 'MOVE_TASK',
        payload: { sourceBoard, sourceTaskArr }
      });
    } else {
      const destinationTaskArr = Array.from(destinationBoard.taskCards);
      sourceTaskArr.splice(source.index, 1);

      destinationTaskArr.splice(destination.index, 0, movedTask);

      dispatch({
        type: 'MOVE_TASK_BETWEEN_BOARDS',
        payload: { sourceBoard, destinationBoard, sourceTaskArr, destinationTaskArr }
      });
    }
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
          <DragDropContext onDragEnd={onDragEnd}>
            {
            state.boardsId.length
              ? state.boardsId.map(item => {
                const column = state.boards[item];
                return <Board key={item} column={column} remove={removeBoard} />;
              })
              : <Tip>Здесь будут отображаться доски с задачами</Tip>
        }
          </DragDropContext>
        </Columns>
      </Main>
    </StoreContext.Provider>
  );
};
