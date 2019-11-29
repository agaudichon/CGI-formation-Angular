import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Team} from '../../model/team.model';
import {ConfigurationToken} from "@app/configuration/configuration.token";

const httpOptions = { 
	headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
};

@Injectable()
export class TeamService {
  
  private readonly baseUrl: string;

  constructor(@Inject(ConfigurationToken) appConfiguration: any, private http: HttpClient) {
    this.baseUrl = appConfiguration.fakeServerUrl;
  }

  public getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl + '/teams', httpOptions);
  }

  public getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(this.baseUrl + '/teams/' + id, httpOptions)
  }

}
