const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURENT_PAGE = 'SET_CURENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT'

let initialState = {
    users: [],
    pageSize: 70,
    totalUsersCount: 0,
    curentPage: 1
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, isFrend: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, isFrend: false }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case SET_CURENT_PAGE:
            return {
                ...state,
                curentPage: action.curentPage
            }
        default:
            return state
    };
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCountAC = (count) => ({ type: TOTAL_USERS_COUNT, totalUsersCount: count });
export const setCurentPageAC = (curentPage) => ({ type: SET_CURENT_PAGE, curentPage });


export default usersReducer