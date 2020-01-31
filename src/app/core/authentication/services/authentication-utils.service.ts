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
    console.log('******************************', accessToken);
    const tokenAuth = this.parseJwt(accessToken);
    const { exp = 1 } = tokenAuth;
    const expiresAt = exp * 1000;
    const roles = tokenAuth['http://nasini.com.ar/roles'][0];
    const tokenType = AuthType.onPremise;
    return {
      expiresAt,
      roles,
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
    return JSON.parse(atob(base64)) || null;
  }
}
