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
      this.toggleEdit();
      this.model.set({
        // userName: this.$el.find('#edit-userName').val(),
        // password: this.$el.find('#edit-pwd').val(),
        fullName: this.$el.find('#edit-fullName').val(),
        imageUrl: this.$el.find('#edit-imageUrl').val(),
        profileVideoUrl: this.$el.find('#edit-vidUrl').val(),
        age: this.$el.find('#edit-age').val(),
        interests: this.$el.find('#edit-interests').val(),
        city: this.$el.find('#edit-city').val(),
        state: this.$el.find('#edit-state').val(),
      });
      this.$el.find('input').val('');
      this.$el.find('select').val('');
      this.model.save(null, {
        type: 'PUT'
      });
      new CurrentUserView({model: this.model});
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
