import { Injectable } from '@angular/core';
const storageName = 'list';
const storageName1 = 'list1';
const storageName2 = 'list2';


const defaultList = [];

@Injectable()
export class ListStorageService {

  todoList;
  inProgressList;
  doneList;

  private update(typeOfList, nameOfStorage) {
    localStorage.setItem(nameOfStorage, JSON.stringify(this[typeOfList]));
    return this.get(typeOfList);
  }
  private findItemIndex(task, typeOfList) {
    return this[typeOfList].indexOf(task);
  }
  constructor() { 
     this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;  
     this.inProgressList = JSON.parse(localStorage.getItem(storageName1)) || defaultList; 
     this.doneList = JSON.parse(localStorage.getItem(storageName2)) || defaultList;  
  }

  get(typeOfList) {
      return [...this[typeOfList]];
  }
  
  post(task, typeOfList, nameOfStorage) {
    this[typeOfList].push(task);
     return this.update(typeOfList, nameOfStorage);
  }

  destroy(task, typeOfList, nameOfStorage) {
      if(JSON.parse(localStorage.getItem(nameOfStorage))[this[typeOfList].indexOf(task)] == task) {
      this[typeOfList].splice(this.findItemIndex(task, typeOfList), 1);
      return this.update(typeOfList, nameOfStorage);
    } else {
      alert("You deleted already this task on other tab!")
    }
  }
}
