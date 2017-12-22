import { InProgressListComponent } from './../in-progress-list/in-progress-list.component';
import { Component, OnInit, Input } from '@angular/core';
import { ListStorageService } from '../list-storage.service';
 
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: any[] = this.storage.todoList;
 
  constructor(private storage:ListStorageService) {
  }
  
  ngOnInit() {
    return this.todoList;
  }

  addTask(task: string)  {
     if(task.length>0) {
       return this.storage.post(task, "todoList", "list");
     }
  }

  destroyTask(task) {
      return this.storage.destroy(task, "todoList", "list");
  }
  moveTask(task) {
      this.storage.post(task, "inProgressList", "list1");
      return this.storage.destroy(task, "todoList", "list");
   }
}
