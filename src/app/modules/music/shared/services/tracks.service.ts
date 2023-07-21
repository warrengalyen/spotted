import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track, TrackFeatures } from '../models/shared.model';
import { DEFAULT_CACHE_MINUTES } from '../music.constants';
import { ENDPOINTS } from '../store/endpoint.store';
import { CachedHttpService } from './cached-http-client.service';

@Injectable()
export class TracksService {
  constructor(private http: CachedHttpService) {}

  getTrack(trackId: string): Observable<Track> {
    const endpoint = ENDPOINTS.get('artist') + trackId;
    return this.http.get({
      url: endpoint,
      cacheMins: DEFAULT_CACHE_MINUTES,
    });
  }

  getTrackFeatures(trackId: string): Observable<TrackFeatures> {
    const endpoint = ENDPOINTS.get('artist_features').replace('{id}', trackId);
    return this.http.get({
      url: endpoint,
      cacheMins: DEFAULT_CACHE_MINUTES,
    });
  }
}
