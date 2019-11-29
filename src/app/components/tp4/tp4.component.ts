import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Team} from '../../../model/team.model';
import {PlayerService} from '@app/services/player.service';
import {TeamService} from '@app/services/team.service';

@Component({
  selector: 'tp4',
  templateUrl: 'tp4.component.html'
})
export class Tp4Component implements OnInit {

  public teams: Team[];
  public playerForm: FormGroup;

  constructor(private playerService: PlayerService, private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((data) => {
      this.teams = data;
    });
  }

  public addPlayer(): void {
    if (this.playerForm.invalid) {
      return;
    }

    const player = this.playerForm.value;
    this.playerService.addPlayer(player).subscribe(() => {
      console.log('Joueur ajouté', player);
    });
  }

  public getFormControl(name) {
    return this.playerForm.get(name);
  }

}