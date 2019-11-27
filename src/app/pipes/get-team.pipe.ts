import { Pipe, PipeTransform } from '@angular/core';
import {Team} from "../../model/team.model";
import {Player} from "../../model/player.model";
import {TeamService} from "@app/services/team.service";

@Pipe({name: 'getTeam'})
export class GetTeamPipe implements PipeTransform {

  public teams: Team[];

  constructor(private teamService: TeamService) {
  }

  transform(player: Player, teams: Team[]): Team {
    return teams.find((t) => t.id === player.teamId);
  }
}