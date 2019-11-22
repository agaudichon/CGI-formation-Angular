import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Player} from "../../../model/player.model";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public player: Player;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // this.player = this.playerService.getPlayer(+params.get('id'))
    });
  }

}