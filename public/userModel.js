var Backbone = require('backbone');
var templates = require('./templates');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
  tagName: 'ul',
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/mime',
  idAttribute: '_id',
  defaults: {
    username: 'mime555',
    password: '123',
    fullName: 'Mime Mimerson',
    imageUrl: 'https://media.giphy.com/media/lgCvugdD94F6o/giphy.gif',
    profileVideoUrl: 'https://youtu.be/H-fJC5EN8LY',
    age: 30,
    interests: "Miming, mimes, mime stuff",
    influences: "Marcel Marceau",
    city: 'Charleston',
    state: 'SC',
  },
  template: _.template(templates.user),
  initialize: function () {},
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
