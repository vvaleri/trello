import React, { useState, useContext } from 'react';
import { Task } from '../Task/Task';
import { Button } from '../UI/Button/Button';
import { InputForm } from '../InputForm/InputForm';
import { StoreContext } from '../../context';
import { Container, Head, Title, Content, Buttons, Footer } from './board.style';
import Delete from '../../assets/img/icon-delete.svg';
import Add from '../../assets/img/icon-add.svg';

export const Board = ({ column }) => {
  const [taskForm, setTaskForm] = useState(false);

  const openForm = () => setTaskForm(true);

  const { dispatch } = useContext(StoreContext);

  const addTask = newTask => {
    dispatch({
      type: 'ADD TASK',
      payload: { boardId: column.id, newTask }
    });
    setTaskForm(false);
  };

  return (
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
      column.taskCards.map(card => (
        <Task key={card.id} card={card} />
      ))
      }
      </Content>
      <Footer>
        <Button
          grey
          onClick={openForm}
        >
          <img src={Add} alt="добавить задачу" />
        </Button>
        <InputForm
          taskForm={taskForm}
          setTaskForm={setTaskForm}
          create={addTask}
        />
      </Footer>
    </Container>
  );
};
