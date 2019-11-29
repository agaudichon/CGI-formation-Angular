import {Injectable, Inject} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Player} from '../../model/player.model';
import {ConfigurationToken} from "@app/configuration/configuration.token";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class PlayerService {

  private readonly baseUrl: string;

  constructor(@Inject(ConfigurationToken) appConfiguration: any, private http: HttpClient) {
    this.baseUrl = appConfiguration.fakeServerUrl;
  }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.baseUrl + '/players', httpOptions);
  }

  public getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(this.baseUrl + '/players/' + id, httpOptions)
  }

  public addPlayer(player: Player): Observable<any> {
    return this.http.post<Player>(this.baseUrl + '/players/', player, httpOptions)
  }

}