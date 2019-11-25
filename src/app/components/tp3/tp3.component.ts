import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import {Player} from '../../../model/player.model';
import {Team} from '../../../model/team.model';
import {PlayerService} from "@app/services/player.service";
import {TeamService} from "@app/services/team.service";
import {faEye} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'tp3',
  templateUrl: 'tp3.component.html',
  styleUrls: ['tp3.component.css']
})
export class Tp3Component implements OnInit {
  
  public players: Player[];
  public teams: Team[];
  public player: Player;
  public selected: Player;
  public iconEye = faEye;
  public playerForm: FormGroup;
  

  constructor(private playerService: PlayerService, private teamService: TeamService) {
    //this.resetCurrentPlayer();
    this.selected = null;
  }

  ngOnInit(): void {
    this.playerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', Validators.required),
      jersey: new FormControl('', [Validators.required, Validators.min(0), Validators.max(99)]),
      teamId: new FormControl('', Validators.required),
    });

    this.playerService.getPlayers().subscribe((data) => this.players = data,
                                      error => console.log('call ngOnInit', error),
                                      () => console.log('appel ok'));
    this.teamService.getTeams().subscribe((data) => this.teams = data,
                                      error => console.log('call ngOnInit', error),
                                      () => console.log('appel ok'));
  }

  public addPlayer(): void {
    //if (this.isValid()) {
      this.player = this.playerForm.value;
      this.player.id = this.players.length + 1;
      this.players.push(this.player);
      //this.resetCurrentPlayer();
    //}
  }

  getFormControl(name) {
    return this.playerForm.get(name);
}

  /*private isValid(): boolean {
    return (this.player.firstname !== '' && this.player.lastname !== '' && (this.player.jersey >= 0) && (this.player.jersey < 100) && this.player.teamId !== null);
  }*/

  /*private resetCurrentPlayer() {
    this.player = {
      firstname: '',
      lastname: '',
      jersey: null,
      teamId: null
    };
  }*/

}