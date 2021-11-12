import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-details-component',
  templateUrl: './todo-details-component.component.html',
  styleUrls: ['./todo-details-component.component.css']
})
export class TodoDetailsComponentComponent implements OnInit {


  public todolist_details :any = []

  constructor(private empInfo:TodoServiceService) { }

  ngOnInit(): void {
    this.todolist_details= this.empInfo.gettodolist()
  }

}
