// export const moveTask = (state, destination, source, draggableId) => {
//   if (!destination) {
//     return;
//   }

//   if (destination.droppableId === source.droppableId
//         && destination.index === source.index) {
//     return;
//   }

//   const board = state.boards[source.droppableId];
//   const newArrTask = Array.from(board.taskCards);
//   const movedTask = newArrTask.filter(task => task.id === draggableId)[0];
//   newArrTask.splice(source.index, 1);
//   newArrTask.splice(destination.index, 0, movedTask);
// };
