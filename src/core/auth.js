// thirdparty imports
import passport from 'passport'
import {Strategy as LocalStrategy} from 'passport-local'
// local imports
import User from '../apps/auth/models/User'


// define the strategy used by the auth backend
passport.use('local-signup', new LocalStrategy((username, password, done) => {
    console.log('inside strategy')
    console.log(username, password)
    // syncronize with the database
    User.sync().then(() => {
        // figure out if there is a user matching the username
        return User.findOne({
            where: {
                username: username,
            },
        })
    })
    .then((user) => {
        // if the users password matches
        if (user.password === password) {
            // return the user that passed
            return done(null, user)
        }
    })
}))


// serizilize the user for the sesion store
passport.serializeUser((user, done) => {
    done(null, user.id)
})


// turn the serialized session value into a real user object
passport.deserializeUser((id, done) => {
    // syncronize with the database
    User.sync().then(() => {
        // figure out if there is a user matching the username
        User.findOne({
            where: {
                id: id,
            },
        })
        .then((user) => {
            // return the user that passed
            return done(null, user)
        })
        // if there is an error
        .catch((err) => {
            return done(err)
        })
    })
})



export default passport
