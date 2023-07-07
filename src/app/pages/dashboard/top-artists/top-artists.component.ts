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
    this.loadData();
  }

  loadData() {
    const observables$: Observable<any>[] = [];
    observables$.push(this.api.getShortTermArtists(this.auth.getToken(), '50'));
    observables$.push(this.api.getMediumTermArtists(this.auth.getToken(), '50'));
    observables$.push(this.api.getLongTermArtists(this.auth.getToken(), '50'));

    forkJoin(observables$).subscribe(res => {
      for (const data of Object.values(res)) {
        if (!data) {
          // Unable to retrieve data, token may have expired, logout
          console.log('test');
          // this.auth.logout();
          // return;
        }
      }

      // Otherwise, populate data
      this.shortTermArtists = res[0];
      this.mediumTermArtists = res[1];
      this.longTermArtists = res[2];
    });
  }

  }

}
