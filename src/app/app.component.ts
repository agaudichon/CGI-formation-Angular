import { Component } from '@angular/core';
import playersJson from '../../data/players.json';
import teamsJson from '../../data/teams.json';

import { Player } from '../model/player.model';
import { Team } from '../model/team.model';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public players: Player[] = playersJson.players;
  public teams: Team[] = teamsJson.teams;

  constructor() {
  }

}

