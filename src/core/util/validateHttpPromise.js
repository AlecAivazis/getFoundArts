export default (response, resolve, reject) => {
    // if the response code is in the 200s
    if (response.status >= 200 && response.status < 300) {
        // keep the reponse going
        return response
    }
    // create an error out of the response text
    const error = new Error(response.statusText)
    // save a copy of the response
    error.response = response
    // throw the error
    throw error
}
