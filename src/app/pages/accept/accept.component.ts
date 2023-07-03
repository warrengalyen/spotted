import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpottedAuthService } from '../../services/spotted-service/spotted-auth.service';
import { SpottedAppConstants } from '../../services/spotted-service/spotted-service.config';

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

  constructor(private router: Router, private route: ActivatedRoute, private auth: SpottedAuthService) {
    this.route.fragment.subscribe(fragment => {
      const fragments = fragment.split('&');
      this.token = fragments[0].split('=')[1];
    });
  }

  ngOnInit() {
  }

}
