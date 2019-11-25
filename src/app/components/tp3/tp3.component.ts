import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import {Player} from '../../../model/player.model';
import {Team} from '../../../model/team.model';
import {DataService} from "@app/services/data.service";
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
  

  constructor(private dataService: DataService) {
    //this.resetCurrentPlayer();
    this.selected = null;
    this.players = dataService.getPlayers();
    this.teams = dataService.getTeams();
  }

  ngOnInit(): void {
    this.playerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', Validators.required),
      jersey: new FormControl('', [Validators.required, Validators.min(0), Validators.max(99)]),
      teamId: new FormControl('', Validators.required),
    });
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