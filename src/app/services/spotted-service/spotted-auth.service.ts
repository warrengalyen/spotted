import {Injectable} from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import { SpottedAppConstants } from "./spotted-service.config";

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
    const authUrl = SpottedAppConstants.API_URL + SpottedAppConstants.API_AUTH;
    const headers = new Headers({
      client_id: '',
      response_type: 'json',
      redirect_uri: 'test'
    });
    return this.http.post(authUrl, {
      headers: headers
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
