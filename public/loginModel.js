var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  tagName: 'ul',
  urlRoot: '/login',
  idAttribute: '_id',
  defaults: {
    userName: 'mime555',
    password: '123',
  },
  initialize: function () {},
});
