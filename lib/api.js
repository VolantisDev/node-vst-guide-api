const axios = require('axios')

const baseUrl = 'http://api.vstguide.com'

function getUrl(type, id) {
  return baseUrl + '/' + type + '/' + id + '.json';
}

function get(type, id) {
  return axios.get(getUrl(type, id))
    .then(function (response) {
      return response.data
    })
}

module.exports = {
  get: get
}
