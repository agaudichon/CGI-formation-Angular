import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Player} from "../../../model/player.model";
import {PlayerService} from "@app/services/player.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public player: Player;

  constructor(private route: ActivatedRoute, private playerService: PlayerService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.playerService.getPlayer(+params.get('id')).subscribe((data) => this.player = data,
                                      error => console.log('call ngOnInit', error),
                                      () => console.log('appel ok'));
    });
  }

}