/* eslint-disable no-shadow  */
// ^ provided and index from beautiful-dnd
import React, { useState, useContext } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Task } from '../Task/Task';
import { Button } from '../UI/Button/Button';
import { InputForm } from '../InputForm/InputForm';
import { StoreContext } from '../../context';
import { addTask } from '../../store/actions';
import { Container, Head, Title, Content, Footer } from './board.style';
import Delete from '../../assets/img/icon-delete.svg';
import Add from '../../assets/img/icon-add.svg';

export const Board = ({ column, remove, index }) => {
  const [taskForm, setTaskForm] = useState(false);

  const openForm = () => setTaskForm(true);

  const { dispatch } = useContext(StoreContext);

  const createTask = newTask => {
    dispatch(addTask({ boardId: column.id, newTask }));
    setTaskForm(false);
  };

  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (
        <Container
          className={column.id === 'board-3' ? 'done' : ''}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Head {...provided.dragHandleProps}>
            <Title>
              <img src={column.src} alt="icon" />
              {column.title}
            </Title>
            <Button onClick={() => remove(column.id)}>
              <img src={Delete} alt="удалить" />
            </Button>
          </Head>

          <Droppable droppableId={column.id} type="task">
            {provided => (
              <Content
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {
                    column.taskCards.map((card, index) => (
                      <Task key={card.id} card={card} index={index} />
                    ))
                  }
                {provided.placeholder}
              </Content>
            )}
          </Droppable>

          <Footer>
            <Button grey onClick={openForm}>
              <img src={Add} alt="добавить задачу" />
            </Button>
            <InputForm
              type="task"
              visible={taskForm}
              setVisible={setTaskForm}
              createTask={createTask}
            />
          </Footer>
        </Container>

      )}
    </Draggable>
  );
};
