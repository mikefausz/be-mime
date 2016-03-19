var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var LogoutModel = require('./logoutModel.js');

module.exports = Backbone.View.extend({
  el: '#current-user-prof',
  template: _.template(tmpl.currentUser),
  events: {
    'click button': 'logoutUser'
  },
  logoutUser: function() {
    console.log(this.model);
    var logout = new LogoutModel(this.model);
    window.log = logout;
    delete logout.attributes.id;
    logout.save();
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
