import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { onMessageChangeCreator, addMessageCreator } from '../../redux/dialogsReducer';

const mapStateToProps = (state) => {
    return {
        dialogsItem: state.dialogsPage.dialogsItem,
        newOwnerMessage: state.dialogsPage.newOwnerMessage,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
