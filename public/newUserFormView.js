var Backbone = require('backbone');
var _ = require('underscore');
var templates = require('./templates');
var UserModel = require('./userModel');

module.exports = Backbone.View.extend({

  template: _.template(templates.newUser),
  events: {
    'submit form': 'addUser'
  },
  addUser: function (event) {
    event.preventDefault();
    this.model.set({
      userName: this.$el.find('#username').val(),
      password: this.$el.find('#pwd').val(),
      fullName: this.$el.find('#fullName').val(),
      imageUrl: this.$el.find('#imageUrl').val(),
      profileVideoUrl: this.$el.find('#vidUrl').val(),
      age: this.$el.find('#age').val(),
      interests: this.$el.find('#interests').val(),
      influences: this.$el.find('#influences').val(),
      city: this.$el.find('#city').val(),
      state: this.$el.find('#state').val(),
    });
    this.$el.find('input').val('');
    this.collection.create(this.model);
    console.log(this.collection);
    this.model = new UserModel({});
  },
  initialize: function () {
    if(!this.model) {
      this.model = new UserModel({});
    }
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
