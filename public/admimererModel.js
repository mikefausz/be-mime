var Backbone = require('backbone');
var templates = require('./templates');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
  urlRoot: '/admimerer',
  initialize: function () {
    console.log('should be new');
  }
});
