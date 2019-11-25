import { Pipe, PipeTransform } from '@angular/core';
import {Team} from "../../model/team.model";
import {Player} from "../../model/player.model";
import {TeamService} from "@app/services/team.service";

@Pipe({name: 'getTeam'})
export class GetTeamPipe implements PipeTransform {

  public teams: Team[];

  constructor(private teamService: TeamService) {
    this.teamService.getTeams().subscribe((data) => this.teams = data,
                                      error => console.log('call ngOnInit', error),
                                      () => console.log('appel ok'));
  }

  transform(player: Player): Team {
    return this.teams.find((t) => t.id === player.teamId);
  }
}