import { INCREASE, DECREASE } from "./../contants";

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
