class ApiError extends Error{

    constructor(statusCode,msg){
        super(msg)
        this.message = msg
        this.statusCode = statusCode;
    }

}

module.exports = ApiError