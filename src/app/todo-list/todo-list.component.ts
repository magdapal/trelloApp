import { Component, OnInit, Input } from '@angular/core';
import { ListStorageService } from '../list-storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: any[] = [];
    
  constructor(private storage:ListStorageService) { }

  ngOnInit() {
    this.todoList = this.getTodoList();
  }

  addTask(task: string)  {
     this.todoList = this.storage.post(task);
  }

  getTodoList() {
     return this.storage.get();
  }

  destroyTask(task) {
     this.todoList = this.storage.destroy(task);
  }
}
