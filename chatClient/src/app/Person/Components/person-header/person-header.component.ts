import { Component, Input } from '@angular/core';
import { IPerson } from '../../../shared/models/Person';

@Component({
  selector: 'app-person-header',
  templateUrl: './person-header.component.html',
  styleUrl: './person-header.component.scss'
})
export class PersonHeaderComponent {
  @Input() person?: IPerson | null;
  
}
