import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { onMessageChangeCreator, addMessageCreator } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let AuthRedirectComponent = withAuthRedirect(Dialogs)
    
const mapStateToProps = (state) => {
    return {
        dialogsItem: state.dialogsPage.dialogsItem,
        newOwnerMessage: state.dialogsPage.newOwnerMessage,
        messages: state.dialogsPage.messages,
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer
