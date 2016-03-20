var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var UserModel = require('./userModel.js');
var LogoutModel = require('./logoutModel.js');

module.exports = Backbone.View.extend({
  el: '#current-user-prof',
  template: _.template(tmpl.currentUser),
  events: {
    'click button': 'logoutUser',
    'click .glyphicon-pencil': 'toggleEdit',
    'click .glyphicon-remove-sign': 'deleteUser'
  },
  logoutUser: function() {
    var logout = new LogoutModel();
    logout.save();
    $('#main').addClass('hidden');
    $('#home').removeClass('hidden');
    $('#current-user-prof').html('');
    $('#profile-list').html('');
    $('#admimerer-list').html('');
  },
  toggleEdit: function() {
    $('#current-user-prof').toggleClass('hidden');
    $('#edit-form').toggleClass('hidden');
  },
  deleteUser: function() {
    console.log("this model in the delete: " + this.model.attributes);
    console.log("hittin it");
    this.model.destroy();
    console.log("WHAT");
  },
  initialize: function () {
    this.render();
    window.model = this.model;
  },
  render: function () {
    console.log("this model in the render: " + this.model.attributes);
    var markup = this.template(this.model);
    this.$el.html(markup);
    return this;
  },
});
