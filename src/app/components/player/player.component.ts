import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Player} from "../../../model/player.model";
import {DataService} from "@app/services/data.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public player: Player;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.player = this.dataService.getPlayer(+params.get('id'))
    });
  }

}