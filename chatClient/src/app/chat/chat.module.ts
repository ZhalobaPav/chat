import { NgModule } from "@angular/core";
import { ChatComponent } from "./Components/chat/chat.component";
import { CustomInputComponent } from "../shared/components/custom-input/custom-input.component";
import { PersonModule } from "../Person/person.module";

@NgModule({
    imports: [CustomInputComponent, PersonModule],
    declarations:[ChatComponent],
    exports: [ChatComponent]
})
export class ChatModule{

}