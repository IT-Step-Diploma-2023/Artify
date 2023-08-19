export class AuthenticationManager {
  //Returns null or username if user is logged in
  isUserLogged() {
    const token = this.getAuthToken();
    if (token === null || token === 'EXPIRED') return null;
    const tokenData = this.#parseJwt(token);
    return tokenData['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  }

  //Returns user login if success, or null if failed
  async authenticateUser(userName: string, userPassword: string) {
    const authData = {
      username: userName,
      password: userPassword,
    };

    const response = await fetch('api/Authentication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authData),
    });
    const token = await response.text();

    localStorage.setItem('token', token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());
    return this.isUserLogged();
  }

  getAuthToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const tokenDuration = this.#getTokenDuration();
    if (tokenDuration < 0) {
      return 'EXPIRED';
    }

    return token;
  }

  #getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expires');
    const expirationDate = new Date(storedExpirationDate ?? '');
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
  }
  #parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );

    return JSON.parse(jsonPayload);
  }
}
