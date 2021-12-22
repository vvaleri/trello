import Backlog from '../assets/img/icon-column-1.svg';
import InProgress from '../assets/img/icon-column-2.svg';
import Done from '../assets/img/icon-column-3.svg';
import Passed from '../assets/img/icon-column-4.svg';

const taskCards = [
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
];

export const taskBoards = {
  boards: {
    'board-1': {
      id: 'board-1',
      src: Backlog,
      title: 'Беклог',
      taskCards
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
