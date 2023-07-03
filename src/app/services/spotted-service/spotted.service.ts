import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SpottedAppConstants } from './spotted-service.config';

/**
 * An Angular 6 service that interfaces with the Spotify API to fetch data.
 */
@Injectable({
  providedIn: 'root'
})
export class SpottedService {

  constructor(private http: HttpClient) {

  }

  /**
   *
   * TODO: Generate model
   *
   * @param {string} token
   * @returns {Observable<any>}
   * @memberof SpottedService
   */
  getProfile(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(`${SpottedAppConstants.API_URL}${SpottedAppConstants.API_PROFILE}`, { headers: headers })
      .pipe(
        map(result => {
          console.log(result);
          return result;
        }),
        catchError(err => {
          return of(null);
        })
      )
  }
}
