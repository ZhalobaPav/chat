import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'users', loadChildren: ()=> import('./Person/person.module').then(mod=>mod.PersonModule)}
];
