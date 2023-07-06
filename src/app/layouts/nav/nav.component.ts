import { Component, OnInit } from '@angular/core';
import { SpottedService } from "../../services/spotted-service/spotted.service";
import {SpottedAuthService} from "../../services/spotted-service/spotted-auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private auth: SpottedAuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
