// thirdparty imports
import passport from 'passport'
import {Strategy as LocalStrategy} from 'passport-local'
// local imports
import User from '../apps/auth/models/User'


// define the strategy used by the auth backend
passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
}, (email, password, done) => {
    // get the user with the matching email
    User.findOne({email: email}, (err, user) => {
        // if there was an error
        if (err) {
            // send the error as the response
            done(err)
        }
        // if the passwords match
        if (user.password === password) {
            // return the user to the strategy
            return done(null, user)
        // otherwise the passwords do not match
        }

        return done(null, false)

        // otherwise the passwords dont match or there was no user
        return done(err)
    })
}))


// serizilize the user for the sesion store
passport.serializeUser((user, done) => {
    console.log(`serializing user ${user.id}`)
    done(null, user.id)
})


// turn the serialized session value into a real user object
passport.deserializeUser((id, done) => {
    console.log('deserializing user')
    User.findOne({id: id}, (err, user) => {
        console.log(`deserialized user ${user.id}`)
        // if the passwords match
        if (user) {
            // return the user to the strategy
            return done(null, user)
        }
        // otherwise the passwords dont match or there was no user
        return done(err)
    })
})



export default passport
