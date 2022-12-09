const passport = require("passport");
const userModel = require("../models/userModel");
var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;
passport.initialize();
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await userModel.findOne({ _id: jwt_payload.userid }).select('-password')

      if (!user) {
        return done(null, false);
      }
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  })
);

module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });
