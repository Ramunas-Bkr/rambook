import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { addMessageCreator } from '../../redux/dialogsReducer';
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
        sendMessage: (newOwnerMessage) => {
            dispatch(addMessageCreator(newOwnerMessage))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
    (Dialogs) 
