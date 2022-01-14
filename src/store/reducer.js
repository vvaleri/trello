const ADD_TASK = 'ADD_TASK';
const ADD_BOARD = 'ADD_BOARD';
const DELETE_BOARD = 'DELETE_BOARD';
const MOVE_TASK = 'MOVE_TASK';
const MOVE_TASK_BETWEEN_BOARDS = 'MOVE_TASK_BETWEEN_BOARDS';
const MOVE_BOARD = 'MOVE_BOARD';

export const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { boardId, newTask } = action.payload;
      const column = state.boards[boardId];
      column.taskCards = [...column.taskCards, newTask];
      return {
        ...state,
        boards: { ...state.boards, [boardId]: column }
      }; }
    case ADD_BOARD: {
      const { newBoard } = action.payload;
      const newBoardId = newBoard.id;
      return {
        ...state,
        boardsId: [...state.boardsId, newBoardId],
        boards: { ...state.boards, [newBoardId]: newBoard }
      };
    }
    case DELETE_BOARD:
      return {
        ...state,
        boardsId: state.boardsId.filter(item => item !== action.payload)
      };
    case MOVE_TASK: {
      const { sourceBoard, sourceTaskArr } = action.payload;
      sourceBoard.taskCards = [...sourceTaskArr];
      return {
        ...state,
        boards: { ...state.boards, [sourceBoard.id]: sourceBoard }
      };
    }
    case MOVE_TASK_BETWEEN_BOARDS: {
      const { sourceBoard,
        destinationBoard,
        sourceTaskArr,
        destinationTaskArr } = action.payload;
      sourceBoard.taskCards = [...sourceTaskArr];
      destinationBoard.taskCards = [...destinationTaskArr];
      return {
        ...state,
        boards: {
          ...state.boards,
          [sourceBoard.id]: sourceBoard,
          [destinationBoard.id]: destinationBoard
        }
      };
    }
    case MOVE_BOARD: {
      return {
        ...state,
        boardsId: [...action.payload]
      };
    }
    default:
      return state;
  }
};
