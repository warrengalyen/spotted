import { Component, OnInit } from '@angular/core';
import { SpottedAuthService } from '../../../services/spotted-service/spotted-auth.service';
import { SpottedService } from '../../../services/spotted-service/spotted.service';
import { SpottedAppConstants } from '../../../services/spotted-service/spotted-service.config';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  private genres: string[];

  constructor(private auth: SpottedAuthService, private api: SpottedService) { }

  ngOnInit() {
    this.api.getTopGenres(this.auth.getToken(), SpottedAppConstants.TOP_LONG).subscribe(genres => {
      this.genres = genres;
    });
  }

}
