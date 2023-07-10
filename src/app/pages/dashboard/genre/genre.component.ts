import { Component, OnInit } from '@angular/core';
import { SpottedAuthService } from '../../../services/spotted-service/spotted-auth.service';
import { SpottedService } from '../../../services/spotted-service/spotted.service';
import { SpottedAppConstants } from '../../../services/spotted-service/spotted-service.config';
import { Genre } from '../../../models/common';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  public shortGenres: Genre[];
  public mediumGenres: Genre[];
  public longGenres: Genre[];

  constructor(private auth: SpottedAuthService, private api: SpottedService) { }

  ngOnInit() {
    this.api.getTopGenres(this.auth.getToken(), SpottedAppConstants.TOP_SHORT).subscribe(genres => {
      this.shortGenres = genres;
    });
    this.api.getTopGenres(this.auth.getToken(), SpottedAppConstants.TOP_MEDIUM).subscribe(genres => {
      this.mediumGenres = genres;
    });
    this.api.getTopGenres(this.auth.getToken(), SpottedAppConstants.TOP_LONG).subscribe(genres => {
      this.longGenres = genres;
    });
  }

}
