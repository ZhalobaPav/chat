import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IPerson } from '../../../shared/models/Person';
import { CustomInputComponent } from '../../../shared/components/custom-input/custom-input.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit{
  destroyRef = inject(DestroyRef);
  public person?: IPerson | null;
  
  constructor(private userService: UserService){}
  ngOnInit(): void {
    this.userService.selectedPerson$.pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((person:IPerson | null)=>{
      this.person = person;
    })
  }

}
