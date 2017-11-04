const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser(async (id, done) => {
	let user = await User.findById(id);
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				let existingUser = await User.findOne({ googleId: profile.id });
				if (existingUser) {
					done(null, existingUser);
				} else {
					let user = await new User({ googleId: profile.id }).save();
					done(null, user);
				}
			} catch (e) {
				console.log(e);
			}
		}
	)
);
