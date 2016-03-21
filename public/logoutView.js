var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var LogoutModel = require('./logoutModel');

module.exports = Backbone.View.extend({
  el: '#logout-box',
  template: _.template(tmpl.logout),
  events: {
    'click button': 'logout'
  },
  logout: function (event) {
    event.preventDefault();
    this.model.save();
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
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
