import {Component, Input} from '@angular/core';

import {Player} from '../../../model/player.model';
import {Team} from '../../../model/team.model';

@Component({
  selector: 'tp2',
  templateUrl: 'tp2.component.html',
  styleUrls: ['tp2.component.css']
})
export class Tp2Component {

  @Input()
  public players: Player[];

  @Input()
  public teams: Team[];

  public player: Player;
  public selected: Player;

  constructor() {
    this.resetCurrentPlayer();
    this.selected = null;
  }

  public addPlayer(): void {
    if (this.isValid()) {
      this.player.id = this.players.length + 1;
      this.players.push(this.player);
      this.resetCurrentPlayer();
    }
  }

  public select(player: Player): void {
    if (this.selected && this.selected === player) {
      this.selected = null;
    } else {
      this.selected = player;
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