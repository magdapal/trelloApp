import { Injectable } from '@angular/core';
const storageName = 'list';

const defaultList = [];

@Injectable()
export class ListStorageService {

  private todoList;

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));
    return this.get();
  }
  private findItemIndex(task) {
    return this.todoList.indexOf(task);
  }
  constructor() { 
     this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;  
  }

  get() {
    return [...this.todoList];
  }
  
  post(task) {
    this.todoList.push(task);
    return this.update();
  }

  destroy(task) {
    this.todoList.splice(this.findItemIndex(task), 1);
    return this.update();
  }

}
