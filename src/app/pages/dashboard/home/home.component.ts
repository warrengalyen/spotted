import { Component, OnInit } from '@angular/core';
import { SpottedService } from '../../../services/spotted-service/spotted.service';
import { TopTracks } from '../../../models/topsongs';
import { TopArtists } from '../../../models/topartist';
import { SpottedAuthService } from '../../../services/spotted-service/spotted-auth.service';
import { SpottedAppConstants } from '../../../services/spotted-service/spotted-service.config';
import { User } from '../../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public topWeeklyTracks: TopTracks;
  public topWeeklyArtists: TopArtists;
  public profile: User;

  constructor(private api: SpottedService, private auth: SpottedAuthService) { }

  ngOnInit() {
    this.api.getShortTermTracks(this.auth.getToken(), '5').subscribe(res => {
      this.topWeeklyTracks = res;
    });

    this.api.getTopArtists(this.auth.getToken(), SpottedAppConstants.TOP_SHORT, '5').subscribe(res => {
      this.topWeeklyArtists = res;
    });

    this.api.getProfile(this.auth.getToken()).subscribe(res => {
      this.profile = res;
    });
  }

}
