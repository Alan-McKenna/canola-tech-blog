import config from '../config'

const auth_service = config[process.env.NODE_ENV].auth_service;
const baseUrl = `${auth_service.protocol}${auth_service.domain}`;


class AuthService {
  async login(username, password) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", 'Basic ' + btoa(username + ':' + password));
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
      method: auth_service.login.method,
      headers: myHeaders,
      redirect: 'follow'
    };
    try {
      const response = await fetch(`${baseUrl}/${auth_service.login.route}`, requestOptions)
      const res = await response.json()
      if (res.jwt) {
        localStorage.setItem("jwt", JSON.stringify(res.jwt));
        localStorage.setItem("username", JSON.stringify(username));
        localStorage.setItem("authTimeout", this.getTimeTomorrow());
        return true;
      }
      return false
    } catch (e) {
      console.log('error', e);
      return false
    }
  }

  async register(username, email, password) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"username":username,"email":email,"password":password});

    var requestOptions = {
      method: auth_service.register.method,
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {
      const response = await fetch(`${baseUrl}/${auth_service.register.route}`, requestOptions)
      const res = await response.json()
      if (res.status === 200) {
        return true
      }
      return false
    } catch (e) {
      console.log('error', e);
      return false
    }
  }


  async checkJwt(jwt) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: auth_service.checkJwt.method,
      headers: myHeaders,
      redirect: 'follow'
    };
    try {
      debugger
      const response = await fetch(`${baseUrl}/${auth_service.checkJwt.route}/${jwt}`, requestOptions)
      const res = await response.json()
      if (res.status === 200) {
        localStorage.setItem("username", JSON.stringify(res.decoded_jwt.username));
        return true;
      }
      return false
    } catch (e) {
      console.log('error', e);
      return false
    }
  }

  getTimeNow() {
    return new Date().getTime();
  }

  getTimeTomorrow() {
    const today = new Date()
    return today.setHours(today.getHours() + 24);
  }

  getAuthTimeout() {
    return JSON.parse(localStorage.getItem('authTimeout'));
  }

  getIsAuthenticated() {
    return (
      JSON.parse(localStorage.getItem('username')) !== null 
      && (this.getAuthTimeout() > this.getTimeNow())
      );
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('username'));
  }

  getJwt() {
    return JSON.parse(localStorage.getItem('jwt'));
  }

}

export default new AuthService();