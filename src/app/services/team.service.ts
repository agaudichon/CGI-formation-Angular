import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Team} from "../../model/team.model";

const httpOptions = { 
	headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
};

@Injectable()
export class TeamService {
  
  private baseurl = 'https://my-json-server.typicode.com/agaudichon/CGI-formation-Angular';

  constructor(private http: HttpClient) {
  }

  public getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseurl + '/teams', httpOptions);
  }

  public getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(this.baseurl + '/teams/' + id, httpOptions)
  }

}
