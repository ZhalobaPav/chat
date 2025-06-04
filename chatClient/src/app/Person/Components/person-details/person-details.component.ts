import { Component, OnInit } from '@angular/core';
import { IPerson } from '../../../shared/models/Person';
import { PersonService } from '../../../shared/services/person.service';
import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.scss'
})
export class PersonDetailsComponent implements OnInit{
  constructor(
    private personService:PersonService,
    private activatedRoute: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.getPerson();
  }

  person!: IPerson;

  private getPerson(){
    const personId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.personService.getPerson(personId)
      .pipe(take(1))
      .subscribe((person:IPerson)=>{
        console.log(person)
        this.person = person;
      })
  }
}
