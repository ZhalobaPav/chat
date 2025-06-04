import { Component, OnInit } from '@angular/core';
import { IPerson, IPersonResponse } from '../../../shared/models/Person';
import { PersonService } from '../../../shared/services/person.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent implements OnInit{
  public persons!:IPerson[];
  
  constructor(private personService: PersonService) { }
  
  ngOnInit(): void {
    this.personService.getPersons().pipe(
      take(1),
    ).subscribe((response:IPersonResponse)=>{
      this.persons = response.users;
      console.log(this.persons);
    })
  }
  
}
