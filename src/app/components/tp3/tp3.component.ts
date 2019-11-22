import {Component, Input} from '@angular/core';

import {Player} from '../../../model/player.model';
import {Team} from '../../../model/team.model';
import {DataService} from "@app/services/data.service";
import {faEye} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'tp3',
  templateUrl: 'tp3.component.html',
  styleUrls: ['tp3.component.css']
})
export class Tp3Component {

  public players: Player[];
  public teams: Team[];
  public player: Player;
  public selected: Player;
  public iconEye = faEye;

  constructor(private dataService: DataService) {
    this.resetCurrentPlayer();
    this.selected = null;
    this.players = dataService.getPlayers();
    this.teams = dataService.getTeams();
  }

  public addPlayer(): void {
    if (this.isValid()) {
      this.player.id = this.players.length + 1;
      this.players.push(this.player);
      this.resetCurrentPlayer();
    }
  }

  private isValid(): boolean {
    return (this.player.firstname !== '' && this.player.lastname !== '' && (this.player.jersey >= 0) && (this.player.jersey < 100) && this.player.teamId !== null);
  }

  private resetCurrentPlayer() {
    this.player = {
      firstname: '',
      lastname: '',
      jersey: null,
      teamId: null
    };
  }

}