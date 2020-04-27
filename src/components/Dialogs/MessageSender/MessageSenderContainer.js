// import React from 'react'
// import { addMessageCreator, onMessageChangeCreator } from '../../../redux/dialogsReducer'
// import MessageSender from './MessageSender'

// const MessageSenderContainer = (props) => {

//     let state = props.store.getState().dialogsPage;

//     let addMessage = () => {
//         props.store.dispatch(addMessageCreator())
//     }

//     let onMessageChange = (event) => {
//         let text = event.target.value
//         props.store.dispatch(onMessageChangeCreator(text))
//     }

//     return (
//         <MessageSender
//             updateMessageBody={onMessageChange}
//             sendMessage={addMessage}
//             dialogsPage={state}
//         />
//     )
// }

// export default MessageSenderContainer
