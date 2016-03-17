var Backbone = require('backbone');
var LoginModel = require('./loginModel');

module.exports = Backbone.Collection.extend({
  model: LoginModel,
  // url: 'http://tiny-tiny.herokuapp.com/collections/mime',
  url: '/login',
  initialize: function () {
    console.log('YOUVE CREATED A LOGIN COLLECTION!');
  }
});
