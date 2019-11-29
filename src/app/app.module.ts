import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {Tp3Component} from "./components/tp3/tp3.component";
import {GetTeamPipe} from "@app/pipes/get-team.pipe";
import {SelectedPlayerDirective} from "@app/directives/selected-player.directive";
import {ConferenceDirective} from "@app/directives/conference.directive";
import {PageNotFoundComponent} from "@app/components/page-not-found/page-not-found.component";
import {PlayerComponent} from "@app/components/player/player.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PlayerService} from "@app/services/player.service";
import {TeamService} from "@app/services/team.service";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: '', component: Tp3Component },
  { path: 'player/:id', component: PlayerComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, FontAwesomeModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, Tp3Component, GetTeamPipe, SelectedPlayerDirective, ConferenceDirective, PageNotFoundComponent, PlayerComponent],
  bootstrap: [AppComponent],
  providers: [ PlayerService, TeamService ]
})
export class AppModule {
}
