var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var templates = require('./templates');
var UserModel = require('./userModel');
var UserCollection = require('./userCollection.js');
var CurrentUserView = require('./currentUserView.js');

module.exports = Backbone.View.extend({
  el: '#edit-form',
  template: _.template(templates.editProf),
  events: {
    'submit form': 'editProfile',
    'click button[type="button"]': 'toggleEdit',
  },
  editProfile: function (event) {
      event.preventDefault();
      var first = this.$el.find('#firstName').val();
      var last = this.$el.find('#lastName').val();
      this.model.set({
        userName: this.$el.find('#userName').val(),
        password: this.$el.find('#pwd').val(),
        fullName: first + ' ' + last,
        imageUrl: this.$el.find('#imageUrl').val(),
        profileVideoUrl: this.$el.find('#vidUrl').val(),
        age: this.$el.find('#age').val(),
        interests: this.$el.find('#interests').val(),
        city: this.$el.find('#city').val(),
        state: this.$el.find('#state').val(),
      });
      this.$el.find('input').val('');
      this.$el.find('select').val('');
      this.model.save()(null, {
        url: '/mime',
        type: 'PUT'
      });;
  },
  toggleEdit: function() {
    $('#current-user-prof').removeClass('hidden');
    $('#edit-form').addClass('hidden');
  },
  initialize: function () {
    this.render();
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
