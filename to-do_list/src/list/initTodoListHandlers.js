import { onListClick } from './taskClickedHandler';
import { onCreateTask } from './createTaskHandler';

export const initTodoListHandlers = () => {
  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onListClick);

  const createBtnElement = document.querySelector('.create-task-btn');
  createBtnElement.addEventListener('click', onCreateTask);
};
