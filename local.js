var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('users',{username:String,password:String});

module.exports = function() {
  passport.use(new LocalStrategy());
};