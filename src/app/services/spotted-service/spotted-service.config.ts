/**
 * Constants for the Spotted Service files
 *
 * @export
 * @class SpottedAppConstants
 */
export const SpottedAppConstants: ISpottedAppConstants = {
  API_URL: 'https://api.spotify.com',
  API_ACCOUNT_URL: 'https://accounts.spotify.com',
  API_AUTH: '/authorize'
};

export interface ISpottedAppConstants {
  API_URL: string;
  API_ACCOUNT_URL: string;
  API_AUTH: string;
}
