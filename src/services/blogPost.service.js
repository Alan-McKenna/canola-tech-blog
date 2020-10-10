import AuthService from './auth.service'
import { lorum, routes } from '../constants'
import config from '../config'

import { blogPost } from '../constants'

const domain = config[process.env.NODE_ENV].domain;
const protocol = config[process.env.NODE_ENV].protocol;
const baseUrl = `${protocol}${domain}`;


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
      const response = await fetch(`${baseUrl}${routes.createPost}`, requestOptions)
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

  async delete(data) {
    
  }

  async get(postId) {
    return blogPost.postContent.blocks
    // return lorum + lorum + lorum + lorum + lorum + lorum + lorum + lorum + lorum + lorum + lorum + lorum
  }
}

export default new BlogPostService();