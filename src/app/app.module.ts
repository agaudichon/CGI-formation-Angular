import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {Tp2Component} from "./components/tp2/tp2.component";

@NgModule({
    imports: [BrowserModule, FormsModule, NgbModule],
    declarations: [AppComponent, Tp2Component],
    bootstrap: [AppComponent]
})
export class AppModule {
}
