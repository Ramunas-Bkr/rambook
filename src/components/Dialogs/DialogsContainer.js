import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { onMessageChangeCreator, addMessageCreator } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
    (Dialogs) 
