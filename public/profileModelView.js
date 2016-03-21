var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var AdmimererModel = require('./admimererModel.js');

module.exports = Backbone.View.extend({
  className: 'well profile-well',
  template: _.template(tmpl.profile),
  events: {
    'click button': 'admimerProf'
  },
  admimerProf: function() {
    console.log("liked " + this.model.attributes.userName);
    var obj = this.model.attributes;
    delete obj.id;
    var newAdmimer = new AdmimererModel(obj);
    newAdmimer.save(null, {
      type: 'POST'
    });
  },
  initialize: function () {},
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
