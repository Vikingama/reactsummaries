const item = action => {
        return {
            id: Math.random(),
            text: action.text,
            time: new Date().getTime()
        };
    },
    reminders = (
        state = JSON.parse(localStorage.getItem("reminders")) || [],
        action = {}
    ) => {
        let reminders = [];
        switch (action.type) {
            case "ADD_REMINDER":
                reminders = [...state, item(action)];
                localStorage.setItem("reminders", JSON.stringify(reminders));
                return reminders;
            case "DEL_REMINDER":
                reminders = state.filter(item => item.id - 0 !== action.id - 0);
                localStorage.setItem("reminders", JSON.stringify(reminders));
                return reminders;
            case "CLEAR_REMINDER":
                reminders = [];
                localStorage.removeItem("reminders");
                return reminders;
            default:
                return state;
        }
    };

export default reminders;
