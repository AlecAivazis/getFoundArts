// thirdparty imports
import {attributeFields} from 'graphql-sequelize'
import {GraphQLObjectType, GraphQLSchema} from 'graphql'
// local imporpts
import User from '../auth/models/User'

const userType = new GraphQLObjectType({
    name: 'User',
    description: 'A User',
    fields: attributeFields(User)
})

const schema = new GraphQLSchema({
    query: userType
})

export default schema
