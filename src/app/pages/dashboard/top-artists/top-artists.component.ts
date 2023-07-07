import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { SpottedService } from '../../../services/spotted-service/spotted.service';
import { SpottedAuthService } from '../../../services/spotted-service/spotted-auth.service';
import { SpottedAppConstants } from '../../../services/spotted-service/spotted-service.config';
import { TopTracks } from '../../../models/topsongs';
import { TopArtists } from '../../../models/topartist';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss']
})
export class TopArtistsComponent implements OnInit {

  public shortTermArtists: TopArtists;
  public mediumTermArtists: TopArtists;
  public longTermArtists: TopArtists;

  constructor(private api: SpottedService, private auth: SpottedAuthService) { }

  ngOnInit() {
  }

}
