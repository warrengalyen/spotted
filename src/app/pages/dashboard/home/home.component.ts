import { Component, OnInit } from '@angular/core';
import { SpottedService } from '../../../services/spotted-service/spotted.service';
import { TopTracks } from '../../../models/topsongs';
import { TopArtists } from '../../../models/topartist';
import { SpottedAuthService } from '../../../services/spotted-service/spotted-auth.service';
import { SpottedAppConstants } from '../../../services/spotted-service/spotted-service.config';
import { User } from '../../../models/user';
import { Observable, forkJoin } from 'rxjs';

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
    this.loadData();
  }

  loadData() {
    const observables$: Observable<any>[] = [];
    observables$.push(this.api.getShortTermTracks(this.auth.getToken(), '5'));
    observables$.push(this.api.getShortTermArtists(this.auth.getToken(), '5'));
    observables$.push(this.api.getProfile(this.auth.getToken()));

    forkJoin(observables$).subscribe(res => {
      for (const data of Object.values(res)) {
        if (!data) {
          // Unable to retrieve data, token may have expired, logout
          this.auth.logout();
          return;
        }
      }

      // Otherwise, populate data
      this.topWeeklyTracks = res[0];
      this.topWeeklyArtists = res[1];
      this.profile = res[2];
    });
  }

}
