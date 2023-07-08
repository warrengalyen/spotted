import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../../../models/topartist';

@Component({
  selector: 'app-artist-tile',
  templateUrl: './artist-tile.component.html',
  styleUrls: ['./artist-tile.component.css']
})
export class ArtistTileComponent implements OnInit {

  @Input()
  public artistData: Artist;

  constructor() { }

  ngOnInit() {
  }

}
