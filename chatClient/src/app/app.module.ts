import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    imports:[AppRoutingModule, BrowserModule, HomeModule, HttpClientModule]
})
export class AppModule{

}