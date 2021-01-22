class Response {
    constructor() {
        return this
    }
    /**
     *  @description success method
     * @param errorCode 
     * @param data 
     * @param message 
     * @param meta 
     */
    public success(errorCode, data, message, meta = {}) {
        return {
            error: false,
            errorCode,
            data,
            message,
            meta
        }
    }

    /**
     * @description output method
     * @param errorCode 
     * @param data 
     * @param count 
     */
    public output(errorCode, data, count = 0) {
        return {
            count,
            data,
            error: false,
            errorCode
        }
    }

    /**
     * @description error method
     * @param errorCode 
     * @param message 
     */
    public error(errorCode, message) {
        return {
            error: true,
            errorCode,
            message
        };
    }
}

const responseHelper = new Response()
export default responseHelper