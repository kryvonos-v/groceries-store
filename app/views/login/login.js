var frame = require('ui/frame')

exports.pageLoaded = function () {
  const hello = 'Hello, ES6!'
  console.log(hello)
}

exports.login = function () {
  alert('login')
}

exports.signup = function () {
  var topmost = frame.topmost()
  topmost.navigate('views/signup/signup')
}