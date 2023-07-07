import { Component, OnInit } from '@angular/core';
import { SpottedService } from '../../../services/spotted-service/spotted.service';
import { TopTracks } from '../../../models/topsongs';
import { TopArtists } from '../../../models/topartist';
import { SpottedAuthService } from '../../../services/spotted-service/spotted-auth.service';
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
    this.api.getTopTracks(this.auth.getToken(), 'short_term', '5').subscribe(res => {
      console.log(res);
      this.topWeeklyTracks = res;
    });

    this.api.getTopArtists(this.auth.getToken(), 'short_term', '5').subscribe(res => {
      console.log(res);
      this.topWeeklyArtists = res;
    });

    this.api.getProfile(this.auth.getToken()).subscribe(res => {
      this.profile = res;
    });
  }

}
