export const addReminder = text => {
    return {
        type: "ADD_REMINDER",
        text
    };
};
export const delReminder = id => {
    return {
        type: "DEL_REMINDER",
        id
    };
};
export const clearReminder = id => {
    return {
        type: "CLEAR_REMINDER"
    };
};
