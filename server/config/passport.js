const mongoose = require("mongoose");
const keys = require("../config/keys");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const Profile = mongoose.model("Profile");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Profile.findById(jwt_payload.id)
        .then(profile => {
          if (profile) {
            return done(null, profile);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
