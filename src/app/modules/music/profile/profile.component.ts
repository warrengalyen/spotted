import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist, PlaylistsResponse } from '../shared/models/playlist.model';
import { GetFollowingResponse, User } from '../shared/models/user.model';
import { PlaylistsService } from '../shared/services/playlists.service';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile',
  styleUrls: ['./profile.component.scss'],
  template: `
    <div class="page">
      <nav-bar *ngIf="user$" [profile]="user$ | async"></nav-bar>
      <profile-summary [user]="user$ | async" [getFollowingResponse]="following$ | async" [playlistsResponse]="playlists$ | async"></profile-summary>
    </div>
  `,
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;
  following$: Observable<GetFollowingResponse>;
  playlists$: Observable<PlaylistsResponse>;

  constructor(
    private profileService: ProfileService,
    private playlistsService: PlaylistsService,
  ) {}

  ngOnInit(): void {
    this.user$ = this.profileService.getProfile();
    this.following$ = this.profileService.getFollowing();
    this.playlists$ = this.playlistsService.getPlaylists();
  }
}
