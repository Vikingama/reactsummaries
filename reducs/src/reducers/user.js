const user = (
    state = {
        email: "example@example.com"
    },
    action = {}
) => {
    switch (action.type) {
        case "FETCHINFO":
            return action.info;
        default:
            return state;
    }
};

export default user;
