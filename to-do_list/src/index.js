import { renderTasks } from './list/renderer';
import { initTodoListHandlers } from './list/initTodoListHandlers';
import { getTasksListData } from './list/tasksGateway';
import { setItem } from './list/storage';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksListData().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });
  initTodoListHandlers();
});

window.addEventListener('storage', (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
});

// 1. Get data from server
// 2. Save data to front-end storage
