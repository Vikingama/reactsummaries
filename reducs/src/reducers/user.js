const initialState = {
        isFetching: false,
        errorInfo: null,
        user: {
            email: "example@example.com"
        }
    },
    user = (state = initialState, action = {}) => {
        switch (action.type) {
            case "FETCHINFO":
                return {
                    isFetching: false,
                    errorInfo: null,
                    user: action.info
                };
            case "FETCHREQUEST":
                return {
                    isFetching: true,
                    errorInfo: null,
                    user: {
                        email: "正在取回数据，请稍等"
                    }
                };
            case "FETCHERROR":
                return {
                    isFetching: false,
                    errorInfo: action.error,
                    user: {
                        email: "服务器出错，请尝试重新获取"
                    }
                };
            default:
                return state;
        }
    };

export default user;
