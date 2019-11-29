import { Pipe, PipeTransform } from '@angular/core';
import {Team} from '../../model/team.model';
import {Player} from '../../model/player.model';
import {TeamService} from '@app/services/team.service';
import { Observable, of } from 'rxjs';

@Pipe({name: 'getTeam'})
export class GetTeamPipe implements PipeTransform {

  public teams: Team[] = [];

  constructor(private teamService: TeamService) {
    this.teamService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }

  transform(player: Player, attribute: string): Observable<Team> {
    return of(this.teams.find((t) => t.id === player.teamId)[attribute]);
  }
}