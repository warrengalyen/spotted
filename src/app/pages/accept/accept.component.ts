import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpottedAuthService } from '../../services/spotted-service/spotted-auth.service';
import { SpottedAppConstants } from '../../services/spotted-service/spotted-service.config';
import { SpottedService } from '../../services/spotted-service/spotted.service';

/**
 * Temp component used to authenticate user and redirected to dashboard
 *
 * @export
 * @class AcceptComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss']
})
export class AcceptComponent implements OnInit {
  token: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private auth: SpottedAuthService, private api: SpottedService) {
    // Extract Spotify user token
    this.route.fragment.subscribe(fragment => {
      const fragments = fragment.split('&'); // Get credentials
      this.token = fragments[0].split('=')[1];
      auth.setToken(this.token);
    });
  }

  ngOnInit() {
    this.testProfile();
  }

  /* TEST FUNCTIONS */
  testProfile() {
    this.api.getProfile(this.auth.getToken()).subscribe((res) => {
      // If the result is null, logout since token expired
      if (res === null) {
        this.auth.logout();
      }
      console.log(res);
    });
  }

}
