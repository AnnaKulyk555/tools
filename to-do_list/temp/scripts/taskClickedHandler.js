import { getItem, setItem } from './storage.js';
import { renderTasks } from './renderer.js';
import { getTasksListData, updateTaskData, deleteTaskData } from './tasksGateway.js';

const updateTask = e => {
  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const {
    text
  } = tasksList.find(task => task.id === taskId);
  const done = e.target.checked;
  const updatedTask = {
    text,
    done
  };
  updateTaskData(taskId, updatedTask).then(() => getTasksListData()).then(newTasksList => {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
};

const deleteTask = e => {
  const taskId = e.target.dataset.id;
  deleteTaskData(taskId).then(() => getTasksListData()).then(newTasksList => {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
};

export function onListClick(e) {
  if (e.target.classList.contains('list-item__checkbox')) {
    updateTask(e);
  }

  if (e.target.classList.contains('list-item__delete-btn')) {
    deleteTask(e);
  }
} // 1. Prepare data
// 2. Update  data in db
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. update UI based on new data