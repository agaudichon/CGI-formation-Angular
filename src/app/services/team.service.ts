import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Team} from '../../model/team.model';
import {ConfigurationToken} from "@app/configuration/configuration.token";

@Injectable()
export class TeamService {
  
  private readonly baseUrl: string;

  constructor(@Inject(ConfigurationToken) appConfiguration: any) {
    this.baseUrl = appConfiguration.fakeServerUrl;
  }

  public getTeams(): Observable<Team[]> {
    return null;
  }

  public getTeam(id: number): Observable<Team> {
    return null;
  }

}
