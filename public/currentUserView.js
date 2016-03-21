var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var UserModel = require('./userModel.js');
var LogoutModel = require('./logoutModel.js');
var EditProfileView = require('./editProfileView.js');

module.exports = Backbone.View.extend({
  el: '#current-user-prof',
  template: _.template(tmpl.currentUser),
  events: {
    'click .glyphicon-pencil': 'toggleEdit',
    'click .glyphicon-remove-sign': 'deleteUser'
  },
  toggleEdit: function() {
    $('#current-user-prof').addClass('hidden');
    $('#edit-form').removeClass('hidden');
    new EditProfileView({model: this.model});
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
    window.bol = this.model;
    var markup = this.template(this.model.attributes);
    this.$el.html(markup);
    return this;
  },
});
