import { ListStorageService } from './../list-storage.service';
import { TaskStatusService } from '../task-status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-progress-list',
  templateUrl: './in-progress-list.component.html',
  styleUrls: ['./in-progress-list.component.scss']
})
export class InProgressListComponent implements OnInit {

  inProgressArray = this.storage.inProgressList;
  
  constructor(private taskStatus:TaskStatusService, private storage:ListStorageService) {
  }

  ngOnInit() {
  }

  moveToTodoList(task) {
     this.storage.post(task, "todoList", "list");
     return this.storage.destroy(task, "inProgressList", "list1");
  }

  moveToDoneList(task) {
      this.storage.post(task, "doneList", "list2");
      return this.storage.destroy(task, "inProgressList", "list1");
  }
}
