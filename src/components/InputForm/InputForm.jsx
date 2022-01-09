import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button } from '../UI/Button/Button';
import { Container, Form, Textarea, Buttons } from './inputForm.style';
import Close from '../../assets/img/icon-close.svg';
import TitleImg from '../../assets/img/icon-column-1.svg';

export const InputForm = ({ visible, setVisible, createTask, createBoard, type, ...props }) => {
  const [text, setText] = useState('');

  const handleForm = e => {
    e.preventDefault();
    if (type === 'task') {
      const newTask = {
        id: nanoid(),
        text
      };
      createTask(newTask);
    }
    if (type === 'board') {
      const newBoard = {
        id: nanoid(),
        src: TitleImg,
        title: text,
        taskCards: []
      };
      createBoard(newBoard);
    }
    setText('');
  };

  return (
    <Container className={visible ? 'visible' : ''} {...props}>
      <Form onSubmit={handleForm}>
        <Textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={type === 'board' ? 'Введите название столбца' : 'Введите текст задачи'}
          required
        />
        <Buttons>
          <Button main>{type === 'board' ? 'Добавить' : 'Добавить задачу'}</Button>
          <Button type="button" onClick={() => setVisible(false)}>
            <img src={Close} alt="Отмена" />
          </Button>
        </Buttons>
      </Form>
    </Container>
  );
};
