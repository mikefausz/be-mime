var Backbone = require('backbone');
var UserModel = require('./userModel');

module.exports = Backbone.Collection.extend({
  model: UserModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/mime',
  initialize: function () {
    console.log('YOUVE CREATED A MIME COLLECTION!');
  }
});
