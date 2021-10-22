let msg = {
    serverError: {
        code: 500,
        error: true,
        msg: 'Internal Server Error'
    },
    badRequest:{
        code: 400,
        error: true,
        msg: 'Error'
    },
    fieldRequired: {
        code: 400,
        error: true,
        msg: 'Please enter all fields'
    },
    authFailed:{
        code: 400,
        error: true,
        msg: 'Auth Failed'
    }
}
module.exports = msg