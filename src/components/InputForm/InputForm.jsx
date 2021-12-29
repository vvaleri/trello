import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button } from '../UI/Button/Button';
import { Container, Form, Textarea, Buttons } from './inputForm.style';
import Close from '../../assets/img/icon-close.svg';

export const InputForm = ({ taskForm, setTaskForm, create }) => {
  const [textTask, setTextTask] = useState('');

  const createTask = e => {
    e.preventDefault();
    const newTask = {
      id: nanoid(),
      text: textTask
    };
    create(newTask);
    setTextTask('');
  };

  return (
    <Container className={taskForm ? 'visible' : ''}>
      <Form onSubmit={createTask}>
        <Textarea
          value={textTask}
          onChange={e => setTextTask(e.target.value)}
          placeholder="Введите текст задачи"
          required
        />
        <Buttons>
          <Button main>Добавить задачу</Button>
          <Button type="button" onClick={() => setTaskForm(false)}>
            <img src={Close} alt="Отмена" />
          </Button>
        </Buttons>
      </Form>
    </Container>
  );
};
