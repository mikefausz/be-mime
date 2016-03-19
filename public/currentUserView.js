var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var LogoutModel = require('./logoutModel.js');

module.exports = Backbone.View.extend({
  el: '#current-user-prof',
  template: _.template(tmpl.currentUser),
  events: {
    'click button': 'logoutUser',
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
  deleteUser: function() {
    this.model.destroy();
  },
  initialize: function () {
    this.render();
  },
  render: function () {
    var markup = this.template(this.model);
    this.$el.html(markup);
    return this;
  },
});
