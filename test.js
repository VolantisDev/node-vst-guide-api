const api = require('./index')

console.log()

api.plugin('914')
  .then(function (data) {
    console.log(data)
  })
  .catch(function (reason) {
    console.error(reason)
  })
