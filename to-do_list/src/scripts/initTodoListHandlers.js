import { onListClick } from './taskClickedHandler.js';
import { onCreateTask } from './createTaskHandler.js';

export const initTodoListHandlers = () => {
  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onListClick);

  const createBtnElement = document.querySelector('.create-task-btn');
  createBtnElement.addEventListener('click', onCreateTask);
};
