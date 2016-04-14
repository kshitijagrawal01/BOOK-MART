
module.exports = function(app) {

    var passport = require('passport');
    var mongoose = require('mongoose');
    var LocalStrategy = require('passport-local').Strategy;
    var FacebookStrategy = require('passport-facebook').Strategy;
    var cors = require('cors');
    var cookieParser = require('cookie-parser');
       var cookiesession = require('cookie-session');
       app.use(cors({origin: 'http://localhost:3000'}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
    var user = require('../server/datasets/users.js');
    var User = mongoose.model('User');

    var session = require('express-session');
    var MongoStore = require('connect-mongo')(session);

    app.use(session({
        store: new MongoStore({
            url: 'mongodb://127.0.0.1/book-store'
         }),
        secret: 'bookstoreofsidd',
        resave:true,
        saveUninitialized:true
    }));

    app.use(passport.initialize());
    app.use(passport.session());
app.use(cookieParser());

    passport.use(new LocalStrategy(
        function (username, password, done) {

            User.findOne({username: username}, function (err, user) {

                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {alert: 'Incorrect username.'});
                }
                if (user.password != password) {
                    return done(null, false, {alert: 'Incorrect password.'});
                }
                return done(null, user);
            });
        }

    ));


    passport.use(new FacebookStrategy({
            clientID: '192223554486722',
            clientSecret: '2ace201c343cc4ee92d315af4f8a325e',
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },function(accessToken, refreshToken, profile, done) {
            process.nextTick(function () {
                User.findOne({'email': profile.emails[0].value}, function (err, user) {
                    console.log(profile);
                    if (err) return done(err);
                    if (user) {
                        done(null, user);
                    } else {
                        var user = new User();
                        console.log("getting data from fb");
                        user.username = profile.emails[0].value;
                        user.facebook.token = accessToken;
                        user.facebookprofileUrl = profile.profileUrl;
                        user.facebook.email = profile.emails[0].value;
                        user.facebook.fbid = profile.id;
                        user.facebook.displayName = profile.displayName;
                        user.firstname =profile.name.givenName;
                        user.lastname=profile.name.familyName;

                        user.save(function (err) {
                            if (err) return done(err);
                            done(null, user);
                        });
                    }
                });
            });
        }
    ));


    passport.serializeUser(function(user, done) {
      
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
               
             done(err, user);
        });
    });

    function isAuthenticated(req,res,next){
        if(req.isAuthenticated())return next();
         res.redirect('/');
    }

app.get('/auth/facebook', passport.authenticate('facebook', {scope:'email'}));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/login.html' }),
        function(req, res) {
            console.log("in fb user callback");
            res.redirect('/#/user');
        });


    app.post('/auth/login', passport.authenticate('local',{session:true}),function(req, res){
      // console.log(req.user);
        res.json(req.user);
    });


    app.get('/auth/currentuser',isAuthenticated,function(req,res){
        console.log("fetching current user info");
        console.log(req.user);
        res.json(req.user);
    });

    app.post('/auth/signup',function(req,res){

        var u =  new User();
        u.username = req.body.email;
        u.password = req.body.password;
        u.lastname = req.body.lastname;
        u.firstname = req.body.firstname;
        u.email = req.body.email;

        u.save(function(err){
            if (err) {
                res.json({'alert':'Registration error'});
            }else{
                res.json({'alert':'Registration success'});
            }
        });
    });

     app.get('/auth/logout', function(req, res){
         console.log('logout');
        req.logout();
        res.send(200);
     });

};