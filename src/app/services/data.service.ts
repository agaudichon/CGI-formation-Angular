import {Injectable} from "@angular/core";
import {Player} from "../../model/player.model";
import {Team} from "../../model/team.model";

import playersJson from '@data/players.json';
import teamsJson from '@data/teams.json';

@Injectable()
export class DataService {

  private players: Player[] = playersJson.players;
  private teams: Team[] = teamsJson.teams;

  constructor() {
  }

  public getPlayers() {
    return this.players;
  }

  public getPlayer(id: number) {
    return this.players.find((p) => p.id === id);
  }

  public getTeams() {
    return this.teams;
  }

  public getTeam(id: number) {
    return this.teams.find((t) => t.id === id);
  }
}