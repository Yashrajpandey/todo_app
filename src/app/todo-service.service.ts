import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  public todolist_details :any = [
    {"name": "first_component", "id":1, "time": "1st"},
    {"name": "second_component", "id":2, "time": "2nd"},
    {"name": "third_component", "id":3, "time": "3rd"},
    {"name": "fourth_component", "id":4, "time": "4th"}
  ]

  gettodolist(){
    return this.todolist_details;
  }

  constructor() { }
}
