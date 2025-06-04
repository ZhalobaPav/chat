import { Component, Input } from '@angular/core';
import { IPerson } from '../../../shared/models/Person';

@Component({
  selector: 'app-person-elem',
  templateUrl: './person-elem.component.html',
  styleUrl: './person-elem.component.scss'
})
export class PersonElemComponent {
  @Input() person!: IPerson;
}
