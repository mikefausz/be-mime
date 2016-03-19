var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  className: 'row',
  template: _.template(tmpl.currentUser),
  initialize: function () {},
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
