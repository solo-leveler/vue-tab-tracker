const axios = require('axios')
const config = require('../config/config')

module.exports = {
  getToken () {
    // Return the promise returned by axios.post()
    return axios.post(
      'https://accounts.spotify.com/api/token',
      `grant_type=${config.grant_type}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(`${config.client_id}:${config.client_secret}`).toString('base64')}`
        },
        withCredentials: true
      }
    ).then(response => {
      // Return the response data from the promise chain
      return response.data
    }).catch(error => {
      // Handle errors within the promise chain
      console.error('Error:', error)
      throw new Error('Failed to get token from Spotify API')
    })
  },

  getNewReleases (accessToken) {
    return axios.get('https://api.spotify.com/v1/browse/new-releases', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.data
    })
      .catch(error => {
        console.error('Error:', error)
        throw new Error('Failed to fetch new releases from Spotify API')
      })
  }
}

// export default {getToken, getNewReleases}
