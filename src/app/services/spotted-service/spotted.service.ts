import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { SpottedAppConstants } from './spotted-service.config';
import { User } from '../../models/user';
import { TopTracks } from '../../models/topsongs';
import { TopArtists } from '../../models/topartist';

/**
 * An Angular 6 service that interfaces with the Spotify API to fetch data.
 */
@Injectable({
  providedIn: 'root'
})
export class SpottedService {

  public profile: User = null;

  public shortTermTracks: TopTracks = null;
  public mediumTermTracks: TopTracks = null;
  public longTermTracks: TopTracks = null;

  public shortTermArtists: TopArtists = null;
  public mediumTermArtists: TopArtists = null;
  public longTermArtists: TopArtists = null;

  constructor(private http: HttpClient) {

  }

  /**
   * Retrieve user profile given the user auth token
   * TODO: Generate model
   *
   * @param {string} token - authorization token
   * @returns {Observable<any>} - JSON response with top songs
   * @memberof SpottedService
   */
  getProfile(token: string): Observable<User> {

    if (this.profile) {
      return of(this.profile);
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<User>(`${SpottedAppConstants.API_URL}${SpottedAppConstants.API_PROFILE}`, { headers: headers })
      .pipe(
        map(result => {
          this.profile = result;
          return result;
        }),
        catchError(err => {
          return of(null);
        })
      );
  }

  /**
   * Return the list of tracks the user listened to the most last week
   * @param token - user auth token
   * @param limit - number of results to load
   * @param offset - offset of the results
   */
  public getShortTermTracks(token: string, limit?: string, offset?: string): Observable<TopTracks> {
    if (this.shortTermTracks && this.shortTermTracks.items.length === Number(limit)) {
      return of(this.shortTermTracks);
    }

    return this.getTopTracks(token, SpottedAppConstants.TOP_SHORT, limit, offset).pipe(
      map(res => {
        this.shortTermTracks = res;
        return res;
      })
    )
  }

  /**
   * Return the list of tracks the user listened to the most the last 6 months
   * @param token - user auth token
   * @param limit - number of results to load
   * @param offset - offset of the results
   */
  public getMediumTermTracks(token: string, limit?: string, offset?: string): Observable<TopTracks> {
    if (this.mediumTermTracks) {
      return of(this.mediumTermTracks);
    }

    return this.getTopTracks(token, SpottedAppConstants.TOP_MEDIUM, limit, offset).pipe(
      map(res => {
        this.mediumTermTracks = res;
        return res;
      })
    );
  }

  /**
   * Return the list of tracks the user listened to the most all time
   * @param token - user auth token
   * @param limit - number of results to load
   * @param offset - offset of the results
   */
  public getLongTermTracks(token: string, limit?: string, offset?: string): Observable<TopTracks> {
    if (this.longTermTracks) {
      return of(this.longTermTracks);
    }

    return this.getTopTracks(token, SpottedAppConstants.TOP_LONG, limit, offset).pipe(
      map(res => {
        this.longTermTracks = res;
        return res;
      })
    );
  }

  /**
   * Get the top tracks for the user given a time range and other parameters
   *
   * @param {string} token - auth token for user
   * @param {string} time_range - different time ranges to search for from today
   * @param {number} limit - number of results to show
   * @param {number} offset - offset of results to start showing from
   * @returns {Observable<any>} - JSON response with full data
   * @memberof SpottedService
   */
  private getTopTracks(token: string, timeRange?: string, limit?: string, offset?: string): Observable<TopTracks> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    let params = new HttpParams(); // Build params
    if (timeRange)
      params = params.set('time_range', timeRange)
    if (limit)
      params = params.set('limit', limit);
    if (offset)
      params = params.set('offset', offset);

    return this.http.get<TopTracks>(`${SpottedAppConstants.API_URL}${SpottedAppConstants.API_PROFILE}${SpottedAppConstants.API_TOP_TRACKS}`, { params, headers: headers })
      .pipe(
        map(result => {
          result.time_period = timeRange;
          return result;
        }),
        catchError(err => {
          return of(null);
        })
      );
  }

  /**
   * Return the top artists listened to last week
   * @param token - user auth token
   * @param limit - number of results to load
   * @param offset - offset of the results
   */
  public getShortTermArtists(token: string, limit?: string, offset?: string): Observable<TopArtists> {
    if (this.shortTermArtists && this.shortTermArtists.items.length === Number(limit)) {
      return of(this.shortTermArtists);
    }

    return this.getTopArtists(token, SpottedAppConstants.TOP_SHORT, limit, offset).pipe(
      map(res => {
        this.shortTermArtists = res;
        return res;
      })
    );
  }

  /**
   * Return the top artists listened to the last 6 months
   * @param token - user auth token
   * @param limit - number of results to load
   * @param offset - offset of the results
   */
  public getMediumTermArtists(token: string, limit?: string, offset?: string): Observable<TopArtists> {
    if (this.mediumTermArtists) {
      return of(this.mediumTermArtists);
    }

    return this.getTopArtists(token, SpottedAppConstants.TOP_MEDIUM, limit, offset).pipe(
      map(res => {
        this.mediumTermArtists  = res;
        return res;
      })
    );
  }

  /**
   * Return the top artists listened to all time
   * @param token - user auth token
   * @param limit - number of results to load
   * @param offset - offset of the results
   */
  public getLongTermArtists(token: string, limit?: string, offset?: string): Observable<TopArtists> {
    if (this.longTermArtists) {
      return of(this.longTermArtists);
    }

    return this.getTopArtists(token, SpottedAppConstants.TOP_LONG, limit, offset).pipe(
      map(res => {
        this.longTermArtists = res;
        return res;
      })
    );
  }

  /**
   * Function to get the top artists for a given user
   *
   * @param {string} token - auth token for user
   * @param {string} time_range - different time ranges to search for from today
   * @param {number} limit - number of results to show
   * @param {number} offset - offset of results to start showing from
   * @returns {Observable<any>} - JSON response with full data
   * @memberof SpottedService
   */
  private getTopArtists(token: string, timeRange?: string, limit?: string, offset?: string): Observable<TopArtists> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    let params = new HttpParams(); // Build params
    if (timeRange)
      params = params.set('time_range', timeRange)
    if (limit)
      params = params.set('limit', limit);
    if (offset)
      params = params.set('offset', offset);


    return this.http.get<TopArtists>(`${SpottedAppConstants.API_URL}${SpottedAppConstants.API_PROFILE}${SpottedAppConstants.API_TOP_ARTISTS}`, { params,  headers: headers })
      .pipe(
        map(result => {

          console.log(result);
          return result;
        }),
        catchError(err => {
          return of(null);
        })
      );
  }
}
