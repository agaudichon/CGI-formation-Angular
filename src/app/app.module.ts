import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from '@app/app.component';
import {Tp3Component} from '@app/components/tp3/tp3.component';
import {GetTeamPipe} from '@app/pipes/get-team.pipe';
import {SelectedPlayerDirective} from '@app/directives/selected-player.directive';
import {ConferenceDirective} from '@app/directives/conference.directive';
import {PageNotFoundComponent} from '@app/components/page-not-found/page-not-found.component';
import {PlayerComponent} from '@app/components/player/player.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PlayerService} from '@app/services/player.service';
import {TeamService} from '@app/services/team.service';
import {RouterModule, Routes} from '@angular/router';
import {Tp4Component} from '@app/components/tp4/tp4.component';

import {environment} from '@env/environment';
import {ConfigurationToken} from "@app/configuration/configuration.token";
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  {path: '', component: Tp3Component},
  {path: 'player/:id', component: PlayerComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    Tp3Component,
    GetTeamPipe,
    SelectedPlayerDirective,
    ConferenceDirective,
    PageNotFoundComponent,
    PlayerComponent,
    Tp4Component
  ],
  bootstrap: [AppComponent],
  providers: [
    PlayerService,
    TeamService,
    {
      provide: ConfigurationToken,
      useValue: environment
    },
  ]
})
export class AppModule {
}
