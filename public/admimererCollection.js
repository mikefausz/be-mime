var Backbone = require('backbone');
var AdmimererModel = require('./admimererModel');

module.exports = Backbone.Collection.extend({
  model: AdmimererModel,
  url: '/mimesAdmimerers',
  initialize: function () {
    console.log('YOUVE CREATED A MIME COLLECTION!');
  }
});
