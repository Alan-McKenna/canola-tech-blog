import config from '../config'
// import { routes } from '../constants'

const domain = config[process.env.NODE_ENV].domain;
const protocol = config[process.env.NODE_ENV].protocol;
const baseUrl = `${protocol}${domain}`;


class AuthService {
  async login(username, password) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", 'Basic ' + btoa(username + ':' + password));
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };
    try {
      const response = await fetch(`${baseUrl}/token`, requestOptions)
      const res = await response.json()
      if (res.jwt) {
        localStorage.setItem("jwt", JSON.stringify(res.jwt));
        localStorage.setItem("username", JSON.stringify(username));
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
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {
      const response = await fetch(`${baseUrl}/user`, requestOptions)
      const res = await response.json()
      debugger
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
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    try {
      debugger
      const response = await fetch(`${baseUrl}/token/${jwt}`, requestOptions)
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

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('username'));;
  }

  getJwt() {
    return JSON.parse(localStorage.getItem('jwt'));;
  }

}

export default new AuthService();