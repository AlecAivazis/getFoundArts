// third party imports
import {createClient} from 'redis'

/**
 * This module manages the redis connection for the application cache
 */
const client = createClient()

client.on('connect', function() {
    console.log('connected to redis')
})

client.set('foo', 'bar', (err, reply) => {
})

// export the client
export default client
