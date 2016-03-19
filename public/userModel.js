var Backbone = require('backbone');
var templates = require('./templates');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
  urlRoot: '/mime',
  defaults: {
    userName: 'mime555',
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
  initialize: function () {},
});
