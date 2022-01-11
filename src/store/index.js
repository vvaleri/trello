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
          id: '1-board-1',
          text: 'Интерфейс динамики кадров на предприятии'
        },
        {
          id: '2-board-1',
          text: 'Ежемесячный отчёт для куратора'
        },
        {
          id: '3-board-1',
          text: 'Статистика по заявкам'
        }
      ]
    },
    'board-2': {
      id: 'board-2',
      src: InProgress,
      title: 'В работе',
      taskCards: [
        {
          id: '1-board-2',
          text: 'Заявки сгруппировать по заявкам'
        },
        {
          id: '2-board-2',
          text: 'Ограничения по безопасности'
        }
      ]
    },
    'board-3': {
      id: 'board-3',
      src: Done,
      title: 'Выполнена',
      taskCards: [
        {
          id: '1-board-3',
          text: 'Проживание: новое поле для тех кто работает'
        },
        {
          id: '2-board-3',
          text: 'Рейтинг мастеров в интерфейсе мереджера'
        },
        {
          id: '3-board-3',
          text: 'Перенос данных в конце месяца'
        },
        {
          id: '4-board-3',
          text: 'Доработки по интерфейсу «Плана»'
        },
        {
          id: '5-board-3',
          text: 'Подвешенная заявка'
        },
        {
          id: '6-board-3',
          text: 'Интерфейс динамики кадров на предприятии'
        }
      ]
    },
    'board-4': {
      id: 'board-4',
      src: Passed,
      title: 'Сдана',
      taskCards: [
        {
          id: '1-board-4',
          text: ' Временной промежуток при фильтрации'
        },
        {
          id: '2-board-4',
          text: 'Статистика по икочникам звонка'
        },
        {
          id: '3-board-4',
          text: 'Добавить график к статистике пользователей (количества регистраций)'
        },
        {
          id: '4-board-4',
          text: 'Создать тестовую сборку сервиса (для обработки нововведений)'
        }
      ]
    }
  },

  boardsId: ['board-1', 'board-2', 'board-3', 'board-4']

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
    case 'MOVE TASK': {
      const { boardId, newArrTask } = action.payload;
      const board = state.boards[boardId];
      board.taskCards = [...newArrTask];
      return {
        ...state,
        boards: { ...state.boards, [boardId]: board }
      };
    }
    default:
      return state;
  }
};
