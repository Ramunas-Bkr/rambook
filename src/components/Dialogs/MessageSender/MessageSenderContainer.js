import { addMessageCreator, onMessageChangeCreator } from '../../../redux/dialogsReducer'
import MessageSender from './MessageSender'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsItem: state.dialogsPage.dialogsItem,
        newOwnerMessage: state.dialogsPage.newOwnerMessage,
        messages: state.dialogsPage.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageBody: () => {
            dispatch(onMessageChangeCreator())
        },
        sendMessage: (text) => {
            dispatch(addMessageCreator(text))
        }
    }
}

const MessageSenderContainer = connect (mapStateToProps, mapDispatchToProps)(MessageSender)

export default MessageSenderContainer
