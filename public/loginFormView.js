var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var templates = require('./templates');
var LoginModel = require('./loginModel');

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
    this.collection.create(this.model.toJSON());
    this.collection.add(this.model);
    console.log(this.model);
    console.log(this.model.toJSON());
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
