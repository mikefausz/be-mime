var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var LogoutModel = require('./logoutModel');

module.exports = Backbone.View.extend({
  el: '#filter-pills',
  events: {
    'click #all': 'showAll',
    'click #admimers': 'showAdmimers',
  },
  showAll: function (event) {
    event.preventDefault();
    $('#profile-list').removeClass('hidden');
    $('#admimer-list').addClass('hidden');
  },
  showAdmimers: function (event) {
    event.preventDefault();
    $('#profile-list').addClass('hidden');
    $('#admimer-list').removeClass('hidden');
  },
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(tmpl.filterPills);
    return this;
  }
});
