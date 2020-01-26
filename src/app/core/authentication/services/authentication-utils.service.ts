import { Injectable } from '@angular/core';

enum AuthType {
  auth0 = 'auth0',
  onPremise = 'onPremise',
}

@Injectable()
export class AuthenticationUtilsService {
  constructor(
  ) { }
  /**
   * Sets the token credentials.
   * The credentials may be persisted across sessions.
   * @param accessToken Auth0 accessToken.
   */

  public parseToken(accessToken): Object {
    const tokenAuth = this.parseJwt(accessToken);

    console.log('/////////////////////////////////////', tokenAuth['http://nasini.com.ar/roles'][0]);
    console.log('/////////////////////////////////////', tokenAuth['http://nasini.com.ar/userinfo']);
    console.log('/////////////////////////////////////', tokenAuth['https://nasini.auth0.com/api/v2/']);
    console.log('/////////////////////////////////////', tokenAuth['https://nasini.auth0.com/userinfo']);
    console.log('/////////////////////////////////////', tokenAuth.aud['https://nasini.auth0.com/api/v2/']);
    console.log('/////////////////////////////////////', tokenAuth.aud['https://nasini.auth0.com/userinfo']);
    console.log('/////////////////accessToken////////////////////', accessToken);
    console.log('/////////////////tokenAuth////////////////////', tokenAuth);
    const { exp = 1 }  = tokenAuth;
    const expiresAt = exp;
    // const { shopId } = tokenAuth['http://nasini.com.ar/info'];
    const tokenType = AuthType.auth0;
    return {
      expiresAt,
      tokenType,
    };
  }

  // http://nasini.com.ar/roles

  /**
   * Decode Token
   * @returns The payload or null
   */
  private parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    console.log('**************************************', JSON.parse(atob(base64)));
    return JSON.parse(atob(base64)) || null;
  }
}
