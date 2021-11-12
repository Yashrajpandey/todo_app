import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  post= '';
  array=["first-component","second-component","third-component","fourth-component"];
  n=this.array.length
  constructor() { }

  ngOnInit(): void {
  }
  Addpost(post: string){

    this.array.push(post);
    this.n++;
    console.log(this.n);
  }

}
