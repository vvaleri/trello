import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Container, PhotoPanel, Photos, Text } from './task.style';
import FirstPerson from '../../assets/img/photo-1.png';
import SecondPerson from '../../assets/img/photo-2.png';
import Indicator from '../../assets/img/icon-indicate.svg';

export const Task = ({ card, index }) => (
  <Draggable draggableId={card.id} index={index}>
    {provided => (
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <PhotoPanel>
          <Photos>
            <img src={FirstPerson} alt="первый исполнитель" />
            <img src={SecondPerson} alt="второй исполнитель" />
          </Photos>
          <img src={Indicator} alt="индикатор прогресса" />
        </PhotoPanel>
        <Text>
          <p>
            <span>#number: &#8288;</span>
            {card.text}
          </p>
        </Text>
      </Container>
    )}

  </Draggable>
);
