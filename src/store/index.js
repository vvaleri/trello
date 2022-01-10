import React, { useReducer } from 'react';
import Backlog from '../assets/img/icon-column-1.svg';
import InProgress from '../assets/img/icon-column-2.svg';
import Done from '../assets/img/icon-column-3.svg';
import Passed from '../assets/img/icon-column-4.svg';

export const initialState = {
  boards: {
    'board-1': {
      id: 'board-1',
      src: Backlog,
      title: 'Беклог',
      taskCards: [
        {
          id: 1,
          text: 'Интерфейс динамики кадров на предприятии'
        },
        {
          id: 2,
          text: 'Ежемесячный отчёт для куратора'
        },
        {
          id: 3,
          text: 'Статистика по заявкам'
        }
      ]
    },
    'board-2': {
      id: 'board-2',
      src: InProgress,
      title: 'В работе',
      taskCards: []
    }
  },

  boardsId: ['board-1', 'board-2']

};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD TASK': {
      const { boardId, newTask } = action.payload;
      const column = state.boards[boardId];
      column.taskCards = [...column.taskCards, newTask];
      return {
        ...state,
        boards: { ...state.boards, [boardId]: column }
      }; }
    case 'ADD BOARD': {
      const { newBoard } = action.payload;
      const newBoardId = newBoard.id;
      return {
        ...state,
        boardsId: [...state.boardsId, newBoardId],
        boards: { ...state.boards, [newBoardId]: newBoard }
      };
    }
    case 'DELETE BOARD':
      return {
        ...state,
        boardsId: state.boardsId.filter(item => item !== action.payload)
      };
    default:
      return state;
  }
};
