// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth0: {
    domain: 'nasini.auth0.com',
    clientID: 'tiTCuWpMoRvdhfvZZHFKjGMkZdMN2PCt',
    audience: 'https://f9hg9stslk.execute-api.sa-east-1.amazonaws.com',
    scope: 'openid profile email write.self',
    urlRedirectAfterCallback: '/',
    urlRedirectUnauthorized: '/unauthorized',
    urlRedirectAfterLogin: '/callback',
    urlRedirectAfterLogout: '/',
  },
  contact: {
    postQuery: ''
  },
  market: {

  }
};
