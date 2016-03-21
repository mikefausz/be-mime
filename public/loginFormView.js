var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var templates = require('./templates');
var LoginModel = require('./loginModel');
var UserModel = require('./userModel');
var UserCollection = require('./userCollection.js');
var ProfileListView = require('./profileListView.js');
var AdmimerCollection = require('./admimerCollection.js');
var AdmimerListView = require('./admimerListView.js');
var EditProfileView = require('./editProfileView.js');
var CurrentUserView = require('./currentUserView.js');
var AdmimererListView = require('./admimererListView.js');
var AdmimererCollection = require('./admimererCollection.js');
var LogoutModel = require('./logoutModel.js');
var LogoutView = require('./logoutView.js');
var FilterView = require('./filterView.js');

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
            new EditProfileView({model: currentUser});
            new CurrentUserView({model: currentUser});

            var userCollection = new UserCollection();
            userCollection.fetch().done(function(){
              new ProfileListView({collection: userCollection});
            });

            var admimerCollection = new AdmimerCollection();
            userCollection.fetch().done(function(){
              console.log(admimerCollection);
              window.play = admimerCollection;
              new AdmimerListView({collection: admimerCollection});
            });

            var admimererCollection = new AdmimererCollection();
            admimererCollection.fetch().done(function(){
              new AdmimererListView({collection: admimererCollection});
            });

            new FilterView();

            new LogoutView({model: new LogoutModel()});

            $('#home').toggleClass('hidden');
            $('#main').toggleClass('hidden');
            that.$el.find('input').val('');

            console.log('success! ' + response);
        },
        error: function(model, response) {
            console.log('error! ' + response);
        }
    });
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
