import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPerson } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private selectedPersonSubject = new BehaviorSubject<IPerson | null>(null);
  public selectedPerson$ = this.selectedPersonSubject.asObservable();
  
  public selectPerson(person: IPerson):void{
    this.selectedPersonSubject.next(person);
  }

  public getSelectedPerson(person: IPerson){
    return this.selectedPersonSubject.value;
  }
  constructor() { }
}