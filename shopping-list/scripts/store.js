'use strict';

import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
  return items.find(item => item.id === id);
}

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch (e) {
    console.log(`Cannot add item ${e.message}`);
  }
}

function findAndToggleChecked(id) {
  this.findById(id).checked = !this.findById(id).checked;
}

function findAndUpdateName(id, newName) {
  try {
    newName.validateName(newName);
    items.findById(id).name = newName;
  } catch (e) {
    console.log(`Cannot update name:${e.message}`);
  }
}

function findAndDelete(id) {
  const index = items.findIndex(item => item.id === id);
  this.items.splice(index, 1);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
