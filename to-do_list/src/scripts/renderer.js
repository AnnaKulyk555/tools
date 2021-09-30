import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const createCheckboxElem = (done, id) => {
  const checkboxElem = document.createElement('input');

  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;

  checkboxElem.classList.add('list-item__checkbox');
  checkboxElem.setAttribute('data-id', id);

  return checkboxElem;
};

const createDeleteBtnElem = id => {
  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');
  deleteBtnElem.setAttribute('data-id', id);

  return deleteBtnElem;
};

export const renderTasks = () => {
  listElem.innerHTML = '';

  const tasksList = getItem('tasksList') || [];
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item', 'list-item');

      if (done) {
        listItemElem.classList.add('list-item_done');
      }

      const checkboxElem = createCheckboxElem(done, id);
      const deleteBtnElem = createDeleteBtnElem(id);

      const textElem = document.createElement('span');
      textElem.classList.add('list-item__text');
      textElem.textContent = text;

      listItemElem.append(checkboxElem, textElem, deleteBtnElem);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
