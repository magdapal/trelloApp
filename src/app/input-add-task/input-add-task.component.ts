import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-add-task',
  templateUrl: './input-add-task.component.html',
  styleUrls: ['./input-add-task.component.scss']
})
export class InputAddTaskComponent implements OnInit {

  valueInput: string = '';
   @Output() submit:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
     
  }
  
  changeTask(newTask: string): void {
     this.submit.emit(newTask);
     this.valueInput = null;
  }
}
