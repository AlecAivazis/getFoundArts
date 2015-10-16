/**
 * This function handles the way you set the cookie headers on a reponse
 */
export default (response, ...args) => {
    console.log(response, ...args)
    response.cookie(...args)
}
