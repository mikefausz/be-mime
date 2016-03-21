var Backbone = require('backbone');
var UserModel = require('./userModel');

module.exports = Backbone.Collection.extend({
  model: UserModel,
  url: '/admimerer',
  initialize: function () {
    console.log('GOT ADMIMERERS!');
  }
});
