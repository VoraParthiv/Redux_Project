const value = 0
const updown = (state = value, action) => {
    switch (action.type) {
        case "INCR":
            return state = state + 1
        case "DECR":
            return state = state - 1
        default:
            return state
    }
}
export default updown