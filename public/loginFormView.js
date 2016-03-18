var Backbone = require('backbone');
var _ = require('underscore');
var templates = require('./templates');
var LoginModel = require('./loginModel');

module.exports = Backbone.View.extend({

  template: _.template(templates.login),
  events: {
    'submit form': 'addUser'
  },
  loginUser: function (event) {
    event.preventDefault();
    this.model.set({
      userName: this.$el.find('#login-user').val(),
      password: this.$el.find('#login-pwd').val(),
    });
    this.$el.find('input').val('');
    this.model.save();
    this.collection.add(this.model);
    console.log(this.collection);
    $('#home').toggleClass('hidden');
    $('#main').toggleClass('hidden');
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
