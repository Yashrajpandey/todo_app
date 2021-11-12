import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private shareMessage=new BehaviorSubject("Default Message");
  newMessage=this.shareMessage.asObservable();

  constructor() { }


}
