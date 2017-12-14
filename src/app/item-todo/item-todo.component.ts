import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.scss']
})
export class ItemTodoComponent implements OnInit {

  @Input() taskTitle: string;

  constructor() { }

  ngOnInit() {
  }
}
