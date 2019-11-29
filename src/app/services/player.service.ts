import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Player} from '../../model/player.model';
import {ConfigurationToken} from "@app/configuration/configuration.token";

@Injectable()
export class PlayerService {

  private readonly baseUrl: string;

  constructor(@Inject(ConfigurationToken) appConfiguration: any) {
    this.baseUrl = appConfiguration.fakeServerUrl;
  }

  public getPlayers(): Observable<Player[]> {
    return null;
  }

  public getPlayer(id: number): Observable<Player> {
    return null;
  }

  public addPlayer(player: Player): Observable<any> {
    return null;
  }

}