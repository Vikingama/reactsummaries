export default (
    state = {
        inputValue: "",
        list: []
    },
    action
) => {
    switch (action.type) {
        case "change_input_value":
            return {
                ...state,
                inputValue: action.value
            };
        case "submit_input_value":
            return {
                ...state,
                inputValue: "",
                list: [...state.list, state.inputValue]
            };
        case "delete_item":
            const list = state.list.concat();
            list.splice(action.index, 1);
            return { ...state, list };
        default:
            return state;
    }
};
