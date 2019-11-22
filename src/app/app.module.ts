import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {Tp1Component} from "./component/tp1/tp1.component";

@NgModule({
    imports: [BrowserModule, FormsModule, NgbModule],
    declarations: [AppComponent, Tp1Component],
    bootstrap: [AppComponent]
})
export class AppModule {
}
