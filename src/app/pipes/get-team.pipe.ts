import { Pipe, PipeTransform } from '@angular/core';
import {Team} from "../../model/team.model";
import {Player} from "../../model/player.model";
import {DataService} from "@app/services/data.service";

@Pipe({name: 'getTeam'})
export class GetTeamPipe implements PipeTransform {

  constructor(private dataService: DataService) {
  }

  transform(player: Player): Team {
    return this.dataService.getTeam(player.teamId);
  }
}