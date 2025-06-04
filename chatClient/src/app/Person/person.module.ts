import { NgModule } from "@angular/core";
import { PersonElemComponent } from "./Components/person-elem/person-elem.component";
import { PersonListComponent } from "./Components/person-list/person-list.component";
import { PersonDetailsComponent } from "./Components/person-details/person-details.component";
import { PersonRoutingModule } from "./person-routing.module";

@NgModule({
    imports:[PersonRoutingModule],
    declarations:[PersonElemComponent, PersonListComponent, PersonDetailsComponent],
    exports: [PersonListComponent, PersonElemComponent, PersonDetailsComponent]
})
export class PersonModule{

}