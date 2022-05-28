import React, { useState } from 'react';
import { Button } from '../UI/Button/Button';
import { Container, Form, Textarea, Buttons } from './inputForm.style';
import Close from '../../assets/img/icon-close.svg';

export const InputForm = ({ visible, type, onClose, onCreate, ...props }) => {
  const [text, setText] = useState('');

  const handleForm = e => {
    e.preventDefault();
    onCreate(text);
    setText('');
  };

  const handleFormClose = () => {
    onClose();
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
          <Button type="button" onClick={handleFormClose}>
            <img src={Close} alt="Отмена" />
          </Button>
        </Buttons>
      </Form>
    </Container>
  );
};
