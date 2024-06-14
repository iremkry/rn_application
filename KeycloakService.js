import Keycloak from "keycloak-js";

const _kc = new Keycloak('./keycloak.json')

let roles = [];

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
  _kc.init({
    onLoad: 'login-required',
    //silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
    checkLoginIframe: false,
  }).then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
      const token = _kc.tokenParsed;
      roles = token.realm_access.roles;
      onAuthenticatedCallback();
    })
    .catch(console.error);
};


const getToken = () => _kc.token;



const KeycloakService = {
  initKeycloak,
  getToken
};

export default KeycloakService;
