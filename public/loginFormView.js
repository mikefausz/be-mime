var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var templates = require('./templates');
var LoginModel = require('./loginModel');
var UserModel = require('./userModel');
var UserCollection = require('./userCollection.js');
var ProfileListView = require('./profileListView.js');
var CurrentUserView = require('./currentUserView.js');
var AdmimererListView = require('./admimererListView.js');
var AdmimererCollection = require('./admimererCollection.js');

module.exports = Backbone.View.extend({

  template: _.template(templates.login),
  events: {
    'submit form': 'loginUser'
  },
  loginUser: function (event) {
    event.preventDefault();
    this.model.set({
      userName: this.$el.find('#login-user').val(),
      password: this.$el.find('#login-pwd').val(),
    });
    console.log("login user " + this.model.attributes.userName);
    var that = this;
    this.collection.create(this.model.toJSON(),{
        success: function(model, response) {
            var currentUser = new UserModel(response);
            console.log("currentUserModel: " + currView);
            window.currUser = currentUser;
            // delete currentUser.attributes.id;
            var currView = new CurrentUserView({model: currentUser});
            console.log("CurrentUserView: " + currView);
            var userCollection = new UserCollection();
            userCollection.fetch().done(function(){
              new ProfileListView({collection: userCollection});
            });
            var admimererCollection = new AdmimererCollection();
            admimererCollection.fetch().done(function(){
              new AdmimererListView({collection: admimererCollection});
            });
            $('#home').toggleClass('hidden');
            $('#main').toggleClass('hidden');
            that.$el.find('input').val('');
            console.log('success! ' + response);
        },
        error: function(model, response) {
            console.log('error! ' + response);
        }
    });

    // window.bill = admimererCollection;
    // window.bill2 = admimererCollection.models;
    // window.bill3 = admimererCollection.models;
    this.model = new LoginModel({});
  },
  initialize: function () {
    if(!this.model) {
      this.model = new LoginModel({});
    }
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
