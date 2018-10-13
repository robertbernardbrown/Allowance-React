class Auth {

    /**
     * Authenticate a user. Save a token string in Local Storage
     * @param {string} token
     */
    static authenticateUser({token, message, userId}) {
      localStorage.setItem('token', token);
      localStorage.setItem('message', message);
      localStorage.setItem('userId', userId);
    }
  
    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     * @returns {boolean}
     */
    static isUserAuthenticated() {
      return localStorage.getItem('token') !== null;
    }
  
    //Deauthenticate a user. Remove a token from Local Storage.
    static deauthenticateUser() {
      localStorage.removeItem('token');
    }
  
    /**
     * Get a token value.
     * @returns {string}
     */
    static getToken() {
      let token = localStorage.getItem('token');
      return token;
    }

    static getUser() {
      let user = localStorage.getItem('userId');
      return user;
    }
  
  }
  
  export default Auth;