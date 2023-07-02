import { Component, OnInit } from '@angular/core';
import { SpottedAuthService } from './services/spotted-service/spotted-auth.service';

/**
 * This will serve as the base container of the application
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Spotted';

  constructor(private spottedAuthService: SpottedAuthService) {}

    ngOnInit() {

    }

    authUser(): void {
      this.spottedAuthService.authorizeSpotify();
    }
}
