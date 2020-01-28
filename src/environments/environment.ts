// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth0: {
    domain: 'nasini.auth0.com',
    clientID: 'tiTCuWpMoRvdhfvZZHFKjGMkZdMN2PCt',
    audience: 'https://nasini.auth0.com/api/v2/',
    scope: 'openid%20email%20profile',
    urlRedirectAfterCallback: '/',
    urlRedirectUnauthorized: '/unauthorized',
    urlRedirectAfterLogin: '/callback',
    urlRedirectAfterLogout: '/',
  },
  contact: {
    postQuery: ''
  },
};
