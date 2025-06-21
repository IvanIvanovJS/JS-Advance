function requestValidator(obj) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^([a-zA-Z0-9\.]+|\*)$/g;
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0',]
    let invalidMessageChars = /[<>\\&'"]/;

    if (!obj.hasOwnProperty("method") || !methods.includes(obj.method)) {
        throw Error`Invalid request header: Invalid Method`
    } else if (!obj.hasOwnProperty("uri") || !obj.uri.match(uriPattern)) {
        throw Error`Invalid request header: Invalid URI`
    } else if (!obj.hasOwnProperty("version") || !versions.includes(obj.version)) {
        throw Error`Invalid request header: Invalid Version`
    } else if (!obj.hasOwnProperty("message") || invalidMessageChars.test(obj.message)) {
        throw Error`Invalid request header: Invalid Message`
    } else {
        return obj
    }
}
requestValidator(obj = {
    method: 'GET',
    uri: 'qwe',
    version: 'HTTP/1.1',
    message: ''
}
)
console.log(requestValidator(
    {
        method: 'GET',
        uri: 'qwe',
        version: 'HTTP/1.1',
        message: ''
    }
));
