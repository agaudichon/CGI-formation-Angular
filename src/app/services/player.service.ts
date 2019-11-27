import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Player} from "../../model/player.model";


const httpOptions = { 
	headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
};


@Injectable()
export class PlayerService {

  private baseurl = 'https://my-json-server.typicode.com/agaudichon/CGI-formation-Angular';

  constructor(private http: HttpClient) {
  }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.baseurl + '/players', httpOptions);
  }

  public getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(this.baseurl + '/players/' + id, httpOptions)
  }

  public setPlayer(player: Player): Observable<any> {
    return this.http.post<Player>(this.baseurl + '/players/', player, httpOptions)
  }

}