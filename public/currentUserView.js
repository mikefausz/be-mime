var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var UserModel = require('./userModel.js');
var LogoutModel = require('./logoutModel.js');

module.exports = Backbone.View.extend({
  el: '#current-user-prof',
  template: _.template(tmpl.currentUser),
  events: {
    'click #edit-prof-btn': 'toggleEdit',
    'click #delete-prof-btn': 'deleteUser'
  },
  toggleEdit: function() {
    $('#current-user-prof').addClass('hidden');
    $('#edit-form').removeClass('hidden');
  },
  deleteUser: function() {
    this.model.destroy();
    $('#main').addClass('hidden');
    $('#home').removeClass('hidden');
    $('#current-user-prof').html('');
    $('#profile-list').html('');
    $('#admimerer-list').html('');
  },
  initialize: function () {
    this.render();
  },
  render: function () {
    var markup = this.template(this.model.attributes);
    this.$el.html(markup);
    return this;
  },
});
