const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            isFrend: true,
            profilePicture: 'https://avatarfiles.alphacoders.com/547/54799.png',
            nickName: 'Ramas',
            firstName: 'Ramūnas',
            lastName: 'Bekeris',
            status: 'Mokausi React. Geras dalykas',
            location: {
                city: 'Vilnius',
                country: 'Lithuania'
            }
        },
        {
            id: 2,
            isFrend: false,
            profilePicture: 'https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-02-2-512.png',
            nickName: 'Elzauskas',
            firstName: 'Elzė',
            lastName: 'Bekerytė',
            status: 'Mokausi daugybos lentelės',
            location: {
                city: 'Vilnius',
                country: 'Lithuania'
            }
        },
        {
            id: 3,
            isFrend: true,
            profilePicture: 'https://cdn1.vectorstock.com/i/1000x1000/80/40/cute-and-funny-monster-avatar-animated-cartoon-vector-15028040.jpg',
            nickName: 'Zivile S.',
            firstName: 'Živilė',
            lastName: 'Šulskaitė',
            status: 'Angaras turi kilti',
            location: {
                city: 'Vilnius',
                country: 'Lithuania'
            }
        },
        {
            id: 4,
            isFrend: true,
            profilePicture: 'https://www.bestfunnies.com/wp-content/uploads/2015/05/Funny-Dog-faces-27.jpg',
            nickName: 'Janis Oz',
            firstName: 'Janis',
            lastName: 'Ozuolnis',
            status: 'Laiks ne gaidis, banks pagaidis',
            location: {
                city: 'Ventspils',
                country: 'Latvia'
            }
        },
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFrend: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFrend: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state, 
                users: [state.users, action.users]
            }
        default:
            return state
    };
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer