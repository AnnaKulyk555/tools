import { renderTasks } from "./list/renderer.js";
import { initTodoListHandlers } from "./list/initTodoListHandlers.js";
import { getTasksListData } from "./list/tasksGateway.js";
import { setItem } from "./list/storage.js";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  getTasksListData().then((tasksList) => {
    setItem("tasksList", tasksList);
    renderTasks();
  });
  initTodoListHandlers();
});

window.addEventListener("storage", (e) => {
  if (e.key === "tasksList") {
    renderTasks();
  }
});

// 1. Get data from server
// 2. Save data to front-end storage
