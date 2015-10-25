// third party imports
import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
} from 'graphql'
import {
    fromGlobalId,
    nodeDefinitions,
} from 'graphql-relay'
// local imports
import User from 'core/auth/models/User'


/**
 * This defines how GraphQL maps global ids to objects and objects to types.
 */
const {nodeInterface, nodeField} = nodeDefinitions(
    // if retrieving an object from the global id
    async (globalId) => {
        // figure out the id and type from the global id
        const {type, id} = fromGlobalId(globalId)
        // if the object is a user
        if (type === 'User') {
            // find the user with the corresponding id
            const user = await User.findById(id)
            // return the user
            return user
        }
        // otherwise its a type we don't recognize
        return null
    },
    // maps objects with GraphQL type
    async (obj) => {
        // if the object is a User
        if (obj instanceof User) {
            // return the user type
            return userType
        }
        // otherwise its an obj we dont recognize
        return null
    }
)

/**
 * This model is the user type for the graphql api
 */
const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        roles: {type: new GraphQLList(GraphQLString)},
    },
})


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            user: {
                type: userType,
                args: {
                    id: {type: GraphQLString},
                },
                resolve: async (_, args) => {
                    // grab the user out of the database from the id
                    const user = await User.findById(args.id)
                    // return the matching user
                    return user
                },
            },
            users: {
                type: new GraphQLList(userType),
                args: {
                    role: {type: GraphQLString},
                },
                resolve: async (_, args) => {
                    // grab the used args
                    const {role} = args
                    // the list of users to return
                    let users

                    // if a role was requested
                    if (role) {
                        // grab users with the matching role
                        users = await User.find({roles: role})
                    // otherwise no role was defined
                    } else {
                        // grab all the users
                        users = await User.find()
                    }

                    // return the list of users
                    return users
                },
            },

        },
    }),
})

export default schema
