import { INCREASE, DECREASE, FETCHINFO } from "./../contants";

export const increament = () => {
    return {
        type: INCREASE
    };
};

export const decreament = () => {
    return {
        type: DECREASE
    };
};

export const puzzle = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: INCREASE
            });
        }, 3000);
    };
};

export const getinfo = () => {
    return dispatch => {
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .catch(error => console.error(error))
            .then(json => {
                dispatch(fetchinfo(json.results[0]));
            });
    };
};

export const fetchinfo = info => {
    return {
        type: FETCHINFO,
        info
    };
};
