import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { InProgressListComponent } from './in-progress-list/in-progress-list.component';
import { DoneListComponent } from './done-list/done-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TodoListComponent,
    InProgressListComponent,
    DoneListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
