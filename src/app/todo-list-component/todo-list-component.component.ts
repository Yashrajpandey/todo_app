import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})
export class TodoListComponentComponent implements OnInit {

  todolist_details :any = []

  constructor(private empInfo:TodoServiceService)   { }

  ngOnInit(): void {
    this.todolist_details= this.empInfo.gettodolist();
  }

}
