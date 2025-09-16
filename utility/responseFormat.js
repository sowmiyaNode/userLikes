function response  (response) {
    //status
    //msg
    //data
    return {
        data: {
            error: response.error,
            msg: response.msg,
            data: response.error?null:response.data
        },
        status: response.error?400:200
    }
}
module.exports = response