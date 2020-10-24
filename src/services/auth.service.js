import config from '../config'

import jwt_decode from "jwt-decode";

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
        const isAdmin = await this.isAdmin(res.jwt)
        return { isAuthenticated: true, isAdmin: isAdmin };
      }
      return { isAuthenticated: false, isAdmin: false };
    } catch (e) {
      console.log('error', e);
      return { isAuthenticated: false, isAdmin: false };
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
        if (res.jwt) {
          localStorage.setItem("jwt", JSON.stringify(res.jwt));
          localStorage.setItem("username", JSON.stringify(username));
          localStorage.setItem("authTimeout", this.getTimeTomorrow());
          const isAdmin = await this.isAdmin(res.jwt)
          return { isRegistered: true, isAdmin: isAdmin };
        }
      }
      return { isRegistered: false, isAdmin: false };
    } catch (e) {
      console.log('error', e);
      return { isRegistered: false, isAdmin: false };
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


  async isAdmin(jwt) {
    const decodedJwt = jwt_decode(jwt)
    if(decodedJwt.role.toLowerCase() === "admin") return true
    return false
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

  getIsAdmin() {
    return (
      JSON.parse(localStorage.getItem('isAdmin')) !== null 
      && (this.getAuthTimeout() > this.getTimeNow())
      );
  }

  logout() {
    localStorage.removeItem("authTimeout");
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("jwt");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('username'));
  }

  getJwt() {
    return JSON.parse(localStorage.getItem('jwt'));
  }

}

export default new AuthService();