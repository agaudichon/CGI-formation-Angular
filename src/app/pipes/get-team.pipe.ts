import { Pipe, PipeTransform } from '@angular/core';
import {Team} from "../../model/team.model";
import {Player} from "../../model/player.model";

@Pipe({name: 'getTeam'})
export class GetTeamPipe implements PipeTransform {

  transform(player: Player): Team {
    // TODO: fix this
    return {id: null, conference: null, fullname: null, abbreviation: null, location: null, name: null};
    // return teams.find((t) => t.id === player.teamId);
  }
}