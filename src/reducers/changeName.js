export default function changeName(state = '', action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
}