export const addTask = payload => ({ type: 'ADD_TASK', payload });

export const addBoard = payload => ({ type: 'ADD_BOARD', payload });

export const deleteBoard = payload => ({ type: 'DELETE_BOARD', payload });

export const moveTask = payload => ({ type: 'MOVE_TASK', payload });

export const moveTaskBetweenBoards = payload => ({ type: 'MOVE_TASK_BETWEEN_BOARDS', payload });
