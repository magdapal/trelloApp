import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { InProgressListComponent } from './in-progress-list/in-progress-list.component';
import { DoneListComponent } from './done-list/done-list.component';
import { InputAddTaskComponent } from './input-add-task/input-add-task.component';
import { ItemTodoComponent } from './item-todo/item-todo.component';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { ListStorageService } from './list-storage.service';
import {AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TodoListComponent,
    InProgressListComponent,
    DoneListComponent,
    InputAddTaskComponent,
    ItemTodoComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    AngularFontAwesomeModule
  ],
  providers: [ListStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
