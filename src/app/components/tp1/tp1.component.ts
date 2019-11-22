import {Component, Input} from '@angular/core';

import {Player} from '../../../model/player.model';
import {Team} from '../../../model/team.model';

@Component({
  selector: 'tp1',
  templateUrl: 'tp1.component.html'
})
export class Tp1Component {

  public players: Player[];

  public teams: Team[];

  public player: Player;

  constructor() {
    this.resetCurrentPlayer();
  }

  public addPlayer(): void {
    if (this.isValid()) {
      this.player.id = this.players.length + 1;
      this.players.push(this.player);
      this.resetCurrentPlayer();
    }
  }

  private isValid(): boolean {
    return (this.player.firstname !== '' && this.player.lastname !== '' && (this.player.jersey >= 0) && (this.player.jersey < 100) && this.player.teamId !== null);
  }

  private resetCurrentPlayer() {
    this.player = {
      firstname: '',
      lastname: '',
      jersey: null,
      teamId: null
    };
  }

}