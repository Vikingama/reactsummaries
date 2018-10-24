import { INCREASE, DECREASE } from "./../contants/index";

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
