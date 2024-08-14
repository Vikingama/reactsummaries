import {
    INCREASE,
    DECREASE,
    FETCHINFO,
    FETCHREQUEST,
    FETCHERROR
} from "./../contants";

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
        dispatch(fetchrequest());
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(json => dispatch(fetchinfo(json.results[0])))
            .catch(error => dispatch(fetcherror(error)));
    };
};

export const fetchinfo = info => {
    return {
        type: FETCHINFO,
        info
    };
};

export const fetchrequest = () => {
    return {
        type: FETCHREQUEST
    };
};

export const fetcherror = error => {
    return {
        type: FETCHERROR,
        error
    };
};
