var api = require('./lib/api')

module.exports = {
  get: function (type, id) {
    return api.get(type, id)
  },
  plugin: function (id) {
    return api.get('plugins', id)
  },
  kontakt: function (id) {
    return api.get('kontakt', id)
  },
  reaktor: function (id) {
    return api.get('reaktor', id)
  }
}
