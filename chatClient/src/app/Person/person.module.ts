import { NgModule } from "@angular/core";
import { PersonElemComponent } from "./Components/person-elem/person-elem.component";
import { PersonListComponent } from "./Components/person-list/person-list.component";
import { PersonRoutingModule } from "./person-routing.module";
import { PersonHeaderComponent } from "./Components/person-header/person-header.component";
import { ScrollViewComponent } from "../shared/components/scroll-view/scroll-view.component";

@NgModule({
    imports: [PersonRoutingModule, ScrollViewComponent],
    declarations:[PersonElemComponent, PersonListComponent, PersonHeaderComponent],
    exports: [PersonListComponent, PersonElemComponent, PersonHeaderComponent]
})
export class PersonModule{

}