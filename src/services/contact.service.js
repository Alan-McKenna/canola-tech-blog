import config from '../config'
const contact_service = config[process.env.NODE_ENV].contact_service;

const baseUrl = `${contact_service.protocol}${contact_service.domain}`;


class ContactService {


  async send(name, email, message) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
      method: contact_service.send.method,
      headers: myHeaders,
      redirect: 'follow'
    };
    try {
      const response = await fetch(`${baseUrl}${contact_service.send.route}`, requestOptions)
      const res = await response.json()
      if (res.status === "200") {
        return true
      }
      return false
    } catch (e) {
      console.log('error', e);
      return false
    }

  }

}

export default new ContactService();