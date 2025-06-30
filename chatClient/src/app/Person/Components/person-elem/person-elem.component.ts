import { Component, Input, OnInit } from '@angular/core';
import { IPerson } from '../../../shared/models/Person';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-person-elem',
  templateUrl: './person-elem.component.html',
  styleUrl: './person-elem.component.scss'
})
export class PersonElemComponent implements OnInit{
  @Input() person!: IPerson;
  selected = false;
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.selectedPerson$.subscribe((selectedPerson)=>{
      this.selected = selectedPerson?.id === this.person.id;
    })
  }

  public changeUser(user:IPerson){
    this.selected = true;
    this.userService.selectPerson(user);
  }
  
}
