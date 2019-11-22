import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {Tp2Component} from "./components/tp2/tp2.component";
import {GetTeamPipe} from "@app/pipes/get-team.pipe";
import {SelectedPlayerDirective} from "@app/directives/selected-player.directive";
import {ConferenceDirective} from "@app/directives/conference.directive";

@NgModule({
    imports: [BrowserModule, FormsModule, NgbModule],
    declarations: [AppComponent, Tp2Component, GetTeamPipe, SelectedPlayerDirective, ConferenceDirective],
    bootstrap: [AppComponent]
})
export class AppModule {
}
