const ClientErrorCodes = Object.freeze({
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        CONFLICT: 409,
        UNPROCESSABLE_ENTITY: 422
    });


const ServerErrorCodes = Object.freeze({
        INTERNAL_SERVER_ERROR: 500,
        NOT_IMPLEMENTED: 501,
        BAD_GATEWAY: 502,
        SERVICE_UNAVAILABLE: 503,
        GATEWAY_TIMEOUT: 504
    });


const SuccessCodes = Object.freeze({
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NO_CONTENT: 204
    });


module.exports = {
    ClientErrorCodes,
    ServerErrorCodes,
    SuccessCodes
};