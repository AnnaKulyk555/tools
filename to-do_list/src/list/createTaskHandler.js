import { renderTasks } from './renderer';
import { setItem } from './storage';
import { createTaskData, getTasksListData } from './tasksGateway';

const inputElement = document.querySelector('.task-input');

export const onCreateTask = () => {
  const { value } = inputElement;
  if (value === '') {
    return;
  }
  inputElement.value = '';

  const newTask = {
    text: value,
    done: false,
  };

  createTaskData(newTask)
    .then(() => getTasksListData())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1. Prepare data
// 2. Write data to data base
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. update UI based on new data
