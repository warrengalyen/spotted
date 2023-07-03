import {Injectable} from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import { SpottedAppConstants } from "./spotted-service.config";
import { SpottedCredentials } from './spotted-credentials';
import { LoggingService, LOG_LEVEL } from '../logging-service/logging.service';

/**
 * App authentication with Spotify
 */
@Injectable()
export class SpottedAuthService {

  scope = [
    'user-read-email',
    'user-read-currently-playing',
    'user-modify-playback-state',
    'streaming',
    'user-read-playback-state',
    'user-read-private',
    'user-top-read',
    'user-read-email'
  ].join('%20');

  constructor(private http: Http, private loggingService: LoggingService) {

  }

  /**
   * Allow the user to authorize itself when logging into Spotify
   */
  public authorizeSpotify(): void {
    const authUrl = SpottedAppConstants.API_ACCOUNT_URL + SpottedAppConstants.API_AUTH;
    window.location.href = this.buildUrlParam(authUrl + '?', {
      client_id: SpottedCredentials.client_id,
      response_type: 'token',
      redirect_uri: 'http://localhost:4200/accept',
      scope: this.scope
    });
  }

  /* HELPER FUNCTIONS */
  /**
   * Helper function for building an url given a single level parameter object
   * @param {string} url - the url to build on
   * @param {*} params - object of parameters
   * @returns {string} - returns the parameterized url
   * @memberOf SpottedAuthService
   */
  private buildUrlParam(url: string, params: any): string {
    Object.entries(params).forEach(
      ([key, value]) => url += `&${ key }=${ value }`
    );
    return url;
  }

  /**
   * Helper function for handling failure in Promise responses
   *
   * @private
   * @param {*} error - the error payload
   * @returns {Promise<any>} - return a resolution of the promise
   * @memberof SpottedAuthService
   */
  private handleError(error: any): Promise<any> {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    this.loggingService.log(errMsg, LOG_LEVEL.Severe); // log to console
    return Promise.resolve(false);
  }
}
