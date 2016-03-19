var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var AdmimererView = require('./admimererView');

module.exports =  Backbone.View.extend({
  el: '#admimerer-list',
  initialize: function () {
    this.addAll();
  },

  addOne: function (el) {
      var admimererView = new AdmimererView({model: el});
      this.$el.append(admimererView.render().el);
  },
  addAll: function () {
    this.$el.html('');
    _.each(this.collection.models, this.addOne, this);
  }
});
