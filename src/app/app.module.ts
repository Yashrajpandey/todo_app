import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { InputComponent } from './input/input.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoDetailsComponentComponent } from './todo-details-component/todo-details-component.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { TodoServiceService } from './todo-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [

    AppComponent,
    TodoComponent,
    TodoHeaderComponent,
    TodoListComponent,
    InputComponent,
    TodoFooterComponent,
    TodoDetailsComponentComponent,
    TodoListComponentComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
