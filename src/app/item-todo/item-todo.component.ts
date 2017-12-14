import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.scss']
})
export class ItemTodoComponent implements OnInit {

  @Input() taskTitle: string;
  @Output() remove:EventEmitter<any> = new EventEmitter;

  element: string;

  constructor() { }

  ngOnInit() {
  }
  
  removeItem(taskTitle) {
     this.remove.emit(taskTitle);
     debugger
  }

}
