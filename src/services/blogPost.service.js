import AuthService from './auth.service'
import { lorum, routes } from '../constants'
import config from '../config'

const blog_service = config[process.env.NODE_ENV].blog_service;
const baseUrl = `${blog_service.protocol}${blog_service.domain}`;


class BlogPostService {
  async save(data) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", 'Bearer ' + AuthService.getJwt());
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify(data)
    };
    try {
      const response = await fetch(`${baseUrl}${blog_service.post}`, requestOptions)
      if (response.status === 200) {
        const res = await response.json()
        return true
      }
      return false
    } catch (e) {
      console.log('error', e);
      return false
    }
    
  }

  async update(postId) {
    var myHeaders = new Headers();

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow',
    };
    const url = `${baseUrl}${blog_service.put}/${postId}` 
    try {
      const response = await fetch(url, requestOptions)
      if (response.status === 200) {
        const res = await response.json()
        return true
      }
      return false
    } catch (e) {
      console.log('error', e);
      return false
    }
  }

  async delete(postId) {
    var myHeaders = new Headers();

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow',
    };
    const url = `${baseUrl}${blog_service.delete}/${postId}` 
    try {
      const response = await fetch(url, requestOptions)
      if (response.status === 200) {
        const res = await response.json()
        return true
      }
      return false
    } catch (e) {
      console.log('error', e);
      return false
    }
  }

  async get_post(postId) {
    var myHeaders = new Headers();

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    const url = `${baseUrl}${blog_service.get}/${postId}` 
    try {
      const response = await fetch(url, requestOptions)
      if (response.status === 200) {
        const res = await response.json()
        return res.post
      }
      return {}
    } catch (e) {
      console.log('error', e);
      return {}
    }
  }

  async get_posts(limit) {
    var myHeaders = new Headers();

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    const url = `${baseUrl}${blog_service.get}` + (limit ? `?limit=${limit}` : ``) 
    try {
      const response = await fetch(url, requestOptions)
      if (response.status === 200) {
        const res = await response.json()
        return res.posts
      }
      return []
    } catch (e) {
      console.log('error', e);
      return []
    }
  }
}

export default new BlogPostService();