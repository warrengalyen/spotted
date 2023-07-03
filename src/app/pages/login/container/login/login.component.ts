import { Component, OnInit } from '@angular/core';
import { SpottedAuthService } from '../../../../services/spotted-service/spotted-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spottedAuthService: SpottedAuthService) { }

  ngOnInit() {

  }

  authUser(): void {
    this.spottedAuthService.authorizeSpotify();
  }
}
