import { moveTask, moveTaskBetweenBoards, moveBoard } from '../store/actions';

export const handleDragnDrop = (
  state,
  dispatch,
  destination,
  source,
  draggableId,
  type
) => {
  if (!destination) {
    return;
  }

  if (destination.droppableId === source.droppableId
        && destination.index === source.index) {
    return;
  }

  if (type === 'board') {
    const newBoardsId = Array.from(state.boardsId);
    newBoardsId.splice(source.index, 1);
    newBoardsId.splice(destination.index, 0, draggableId);

    dispatch(moveBoard(newBoardsId));
    return;
  }

  const sourceBoard = state.boards[source.droppableId];
  const destinationBoard = state.boards[destination.droppableId];

  const sourceTaskArr = Array.from(sourceBoard.taskCards);
  const movedTask = sourceTaskArr.filter(task => task.id === draggableId)[0];

  if (sourceBoard === destinationBoard) {
    sourceTaskArr.splice(source.index, 1);
    sourceTaskArr.splice(destination.index, 0, movedTask);

    dispatch(moveTask({ sourceBoard, sourceTaskArr }));
  } else {
    const destinationTaskArr = Array.from(destinationBoard.taskCards);
    sourceTaskArr.splice(source.index, 1);

    destinationTaskArr.splice(destination.index, 0, movedTask);

    dispatch(moveTaskBetweenBoards({ sourceBoard,
      destinationBoard,
      sourceTaskArr,
      destinationTaskArr }));
  }
};
