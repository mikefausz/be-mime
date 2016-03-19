var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var templates = require('./templates');
var LoginModel = require('./loginModel');
var UserCollection = require('./userCollection.js');
var ProfileListView = require('./profileListView.js');
var CurrentUserView = require('./currentUserView.js');

module.exports = Backbone.View.extend({

  template: _.template(templates.login),
  events: {
    'submit form': 'loginUser'
  },
  loginUser: function (event) {
    event.preventDefault();
    $('#home').toggleClass('hidden');
    $('#main').toggleClass('hidden');
    console.log(this.$el.find('#login-user').val());
    console.log(this.$el.find('#login-pwd').val());
    this.model.set({
      userName: this.$el.find('#login-user').val(),
      password: this.$el.find('#login-pwd').val(),
    });
    this.$el.find('input').val('');
    this.collection.create(this.model.toJSON(),{
        success: function(model, response) {
            console.log('success! ' + response);
            window.glob = response;
            new CurrentUserView({model: response});
        },
        error: function(model, response) {
            console.log('error! ' + response);
        }
    });
    // this.collection.add(this.model);
    // console.log(this.model);
    // console.log(this.model.toJSON());
    var userCollection = new UserCollection();
      userCollection.fetch().done(function(){
    new ProfileListView({collection: userCollection});
  });
    this.model = new LoginModel({});
  },
  initialize: function () {
    if(!this.model) {
      this.model = new LoginModel({});
    }
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
