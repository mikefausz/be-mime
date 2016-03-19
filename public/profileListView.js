var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var ProfileView = require('./profileModelView');

module.exports =  Backbone.View.extend({
  el: '#profile-list',
  initialize: function () {
    this.addAll();
  },

  addOne: function (el) {
      var modelView = new ProfileView({model: el});
      this.$el.append(modelView.render().el);
  },
  addAll: function () {
    this.$el.html('');
    _.each(this.collection.models, this.addOne, this);
  }
});
