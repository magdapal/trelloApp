import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
   
  todoList: any[] = [];
    
  constructor() { }

  ngOnInit() {
  }

  addTask(task: string) : void {
     
    this.todoList.push(task);
     
  }
}
