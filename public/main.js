var $ = require('jquery');
var Backbone = require('backbone');
var UserCollection = require('./userCollection');
var NewUserForm = require('./newUserFormView');
var LoginForm = require('./loginFormView');

$(document).ready(function(){
  // var loginCollection = new LoginCollection();
  var loginFormMarkup = new LoginForm({collection: null});
  $('#login-form').html(loginFormMarkup.render().el);

  var userCollection = new UserCollection();
  var newUserFormMarkup = new NewUserForm({collection: userCollection});
  $('#new-user').html(newUserFormMarkup.render().el);
});
