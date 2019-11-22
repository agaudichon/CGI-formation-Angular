import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {Tp3Component} from "./components/tp3/tp3.component";
import {GetTeamPipe} from "@app/pipes/get-team.pipe";
import {SelectedPlayerDirective} from "@app/directives/selected-player.directive";
import {ConferenceDirective} from "@app/directives/conference.directive";
import {PageNotFoundComponent} from "@app/components/page-not-found/page-not-found.component";
import {PlayerComponent} from "@app/components/player/player.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, FontAwesomeModule],
  declarations: [AppComponent, Tp3Component, GetTeamPipe, SelectedPlayerDirective, ConferenceDirective, PageNotFoundComponent, PlayerComponent],
  bootstrap: [AppComponent],
  providers: [ ]
})
export class AppModule {
}
