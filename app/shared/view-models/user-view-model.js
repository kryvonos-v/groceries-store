var config = require('../../shared/config')
var fetch = require('fetch').fetch
var observable = require('data/observable')

function User ({ email = '', password = '' } = {}) {
  // You can add properties to observables on creation
  const vm = new observable.fromObject({
    email,
    password
  })

  vm.register = function () {
    const params = {
      username: vm.get('email'),
      email: vm.get('email'),
      password: vm.get('password')
    }

    return fetch(config.apiUrl + 'user/' + config.appKey, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: getCommonHeaders()
      })
      .then(handleErrors)
  }

  return vm
}

function getCommonHeaders() {
  return {
    'Content-Type': 'application/json',
    'Authorization': config.appUserHeader
  }
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(JSON.stringify(response))
    throw Error(response.statusText)
  }

  return response
}

module.exports = User