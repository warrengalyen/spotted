import {Injectable} from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import { SpottedAppConstants } from "./spotted-service.config";
import { SpottedCredentials } from './spotted-credentials';

/**
 * App authentication with Spotify
 */
@Injectable()
export class SpottedAuthService {

  constructor(private http: Http) {

  }

  /**
   * Allow the user to authorize itself when logging into Spotify
   */
  public authorizeSpotify(): Promise<string> {
    const authUrl = SpottedAppConstants.API_ACCOUNT_URL + SpottedAppConstants.API_AUTH;
    return this.http.get(authUrl, {
      params: {
        client_id: SpottedCredentials.client_id,
        response_type: 'token',
        redirect_uri: 'test'
      }
    })
      .toPromise()
      .then((response: Response) => {
        if (response.status < 300) {
          const data = response.json();
          return data.redirect_url;
        } else {
          return false;
        }
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console
    return Promise.resolve(false);
  }
}
