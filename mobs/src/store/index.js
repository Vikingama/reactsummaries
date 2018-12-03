import { observable } from "mobx";

const store = observable({
    name: "mobx",
    timers: 0
});

export default store; // Proxy...