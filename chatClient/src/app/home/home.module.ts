import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { PersonModule } from "../Person/person.module";

@NgModule({
    declarations: [HomeComponent],
    imports:[PersonModule]
})
export class HomeModule{

}