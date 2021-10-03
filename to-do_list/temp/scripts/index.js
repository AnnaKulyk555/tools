import { renderTasks } from './renderer.js';
import { initTodoListHandlers } from './initTodoListHandlers.js';
import { getTasksListData } from './tasksGateway.js';
import { setItem } from './storage.js';
document.addEventListener('DOMContentLoaded', () => {
  getTasksListData().then(tasksList => {
    setItem('tasksList', tasksList);
    renderTasks();
  });
  initTodoListHandlers();
});
window.addEventListener('storage', e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
}); // 1. Get data from server
// 2. Save data to front-end storage