import { connect } from "react-redux"
import Users from "./Users"
import { followAC, unfollowAC, setUsersAC, setCurentPageAC, setTotalUsersCountAC } from "../../redux/usersReducers";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        curentPage: state.usersPage.curentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        },
        setCurentPage: (curentPage) => {
            dispatch(setCurentPageAC(curentPage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)