import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { PersonModule } from "../Person/person.module";
import { ChatModule } from "../chat/chat.module";

@NgModule({
    declarations: [HomeComponent],
    imports:[PersonModule, ChatModule]
})
export class HomeModule{

}