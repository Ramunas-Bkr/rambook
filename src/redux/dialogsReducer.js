const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                ownersMessage: state.newOwnerMessage,
                friendsMessage: 'Gerai'
            };
            state.messages.push(newMessage);
            state.newOwnerMessage = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newOwnerMessage = action.newMessage;
            return state;
        default:
            return state
    }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })

export const onMessageChangeCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessage: text
})

export default dialogsReducer