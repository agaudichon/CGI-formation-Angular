import {Component, OnInit} from '@angular/core';

import {Player} from '../../../model/player.model';
import {Team} from '../../../model/team.model';
import {PlayerService} from '@app/services/player.service';
import {TeamService} from '@app/services/team.service';
import {faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tp3',
  templateUrl: 'tp3.component.html',
  styleUrls: ['tp3.component.css']
})
export class Tp3Component implements OnInit {

  public players: Player[];
  public teams: Team[];
  public selected: Player;
  public iconEye = faEye;


  constructor(private playerService: PlayerService, private teamService: TeamService) {
    this.selected = null;
  }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((players) => {
      this.players = players;
    });
    this.teamService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }

}