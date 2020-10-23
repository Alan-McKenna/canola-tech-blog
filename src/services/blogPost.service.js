import AuthService from './auth.service'
import config from '../config'

const blog_service = config[process.env.NODE_ENV].blog_service;
const baseUrl = `${blog_service.protocol}${blog_service.domain}`;


class BlogPostService {
  async save(post) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", 'Bearer ' + AuthService.getJwt());
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: blog_service.post.method,
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify(post)
    };
    try {
      const response = await fetch(`${baseUrl}${blog_service.post.route}`, requestOptions)
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

  async update(postId, post) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", 'Bearer ' + AuthService.getJwt());
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: blog_service.put.method,
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify(post)
    };
    const url = `${baseUrl}${blog_service.put.route}/${postId}` 
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
    myHeaders.append("Authorization", 'Bearer ' + AuthService.getJwt());
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: blog_service.delete.method,
      headers: myHeaders,
      redirect: 'follow'
    };
    const url = `${baseUrl}${blog_service.delete.route}/${postId}` 
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

  async getPost(postId) {
    var myHeaders = new Headers();

    var requestOptions = {
      method: blog_service.get.method,
      headers: myHeaders,
      redirect: 'follow',
    };
    const url = `${baseUrl}${blog_service.get.route}/${postId}` 
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

  async getPosts(limit) {
    var myHeaders = new Headers();

    var requestOptions = {
      method: blog_service.get.method,
      headers: myHeaders,
      redirect: 'follow',
    };
    const url = `${baseUrl}${blog_service.get.route}` + (limit ? `?limit=${limit}` : ``) 
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

  async submitComment({ postId, content, author }) {
    // return true
    const comment = { content, author }
    var myHeaders = new Headers();
    myHeaders.append("Authorization", 'Bearer ' + AuthService.getJwt());
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: blog_service.post.method,
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify(comment)
    };
    const url = `${baseUrl}${blog_service.post.route}`
                + (postId ? `/${postId}` : ``)
                + `/comment`
    try {
      const response = await fetch(url, requestOptions)
      if (response.status === 200) {
        const res = await response.json()
        return res.comments
      }
      return []
    } catch (e) {
      console.log('error', e);
      return []
    }
  }
}

export default new BlogPostService();