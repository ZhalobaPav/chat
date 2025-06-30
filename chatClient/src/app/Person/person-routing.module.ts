import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonListComponent } from "./Components/person-list/person-list.component";

const routes:Routes = [
    {path: '', component: PersonListComponent}
];
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonRoutingModule{

}