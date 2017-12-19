import { ListStorageService } from './../list-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  doneListTasks = this.storage.doneList;

  constructor(private storage:ListStorageService) { }

  ngOnInit() {
  }

  moveToInProgressList(task) {
    this.storage.post(task, "inProgressList", "list1")
    return this.storage.destroy(task, "doneList", "list2");
  }
}
