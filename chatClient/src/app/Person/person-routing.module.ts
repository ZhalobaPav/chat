import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonListComponent } from "./Components/person-list/person-list.component";
import { PersonDetailsComponent } from "./Components/person-details/person-details.component";

const routes:Routes = [
    {path: '', component: PersonListComponent},
    {path: ':id', component: PersonDetailsComponent}
];
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonRoutingModule{

}