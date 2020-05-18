import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Šiuo metu pasaulis užsidaręs. Turizmo srityje viskas sustojo. konomika krenta žemyn. Kelionės arba prisiminimuose, arba svajonėse.',
            likecount: 20
        },
        {
            id: 2,
            message: 'Sveiki gyvi! Nors del dabartines situacijos visi priversti siek tiek sustoti, pazaiskim! Imeskite savo ispudingiausia uzfiksuota akimirka 😍 tikiu, kad turite ju daugybe 😎 pakeliaukime cia ir dabar! Mano akimirka is zygio i Trolio liezuvi Grazios dienos!',
            likecount: 15
        },
        {
            id: 3,
            message: 'Sveiki! Domina ar keiciant i identiska kelione 2021 metams jums pakilo keliones kaina, del to kad keiciasi vaiku amzius siais metais yra 2 ir 4 m. o kadangi kitais metais vaikai didesni ir agentura teigia jog kambario tipas keiciasi privalomai. (Novaturas) mes sutinkame likti to pacio tipo kambaryje, bet teigia kad neimanoma, reik moketi priemoka ir viskas.',
            likecount: 5
        }
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                id: 4,
                likecount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };

        default:
            return state
    }
}

export const addPostCreator = () => ({ type: ADD_POST });
export const onPostChangeCreator = (text) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    });
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId).then(response => {
        dispatch (setUserProfile(response.data));
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch (setStatus(response.data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch (updateStatus(status));
            }
    })
}

export default profileReducer