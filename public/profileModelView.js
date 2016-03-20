var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var AdmimererModel = require('./admimererModel.js');

module.exports = Backbone.View.extend({
  className: 'well',
  template: _.template(tmpl.profile),
  events: {
    'click .glyphicon-heart': 'admimerProf'
  },
  admimerProf: function() {
    // event.preventDefault();
    // console.log('this', this);
    console.log("liked " + this.model.attributes.userName);
    var obj = this.model.attributes;
    // console.log(obj);
    delete obj.id;
    var newAdmimer = new AdmimererModel(obj);
    // window.newA = newAdmimer;
    // newAdmimer.save();
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
