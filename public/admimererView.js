var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  className: 'row admimerer',
  template: _.template(tmpl.admimerers),
  initialize: function () {},
  render: function () {
    var markup = this.template(this.model.attributes.mime);
    this.$el.html(markup);
    return this;
  }
});
