const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

let initialState = {
    dialogsItem: [
        {
            id: 1,
            name: 'Ramūnas',
            avatar: 'https://pickaface.net/gallery/avatar/ramadani.asal51e53d14276d6.png'
        },
        {
            id: 2,
            name: 'Živilė',
            avatar: 'https://previews.123rf.com/images/kakigori/kakigori1711/kakigori171100013/90684669-pretty-young-blonde-woman-with-smiling-face-expression-avatar.jpg'
        },
        {
            id: 3,
            name: 'Elzė',
            avatar: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131304884/original/190ac627bd2074add9e3281828ee8ac7ac725380/make-you-a-random-anime-girl-avatar.jpg'
        },
        {
            id: 4,
            name: 'Monmorensis',
            avatar: 'https://3.bp.blogspot.com/-Ky_vFN5_XSM/TmSEibyZVkI/AAAAAAAAAyY/TwBlb-cgouo/s1600/Funny+avatar+pic+angry+dog.jpg'
        }
    ],
    newOwnerMessage: '',
    messages: [
        {
            id: 1,
            ownersMessage: 'Labas, kaip tu laikais?',
            friendsMessage: 'Labas'
        },
        {
            id: 2,
            ownersMessage: 'Ką tu? Ką vakare?',
            friendsMessage: 'Nieko visai'
        },
        {
            id: 3,
            ownersMessage: 'Gal į virtuvę?',
            friendsMessage: 'Tingiu'
        },

    ]
};



const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages,
                {
                    id: 4,
                    ownersMessage: state.newOwnerMessage,
                    friendsMessage: 'Gerai'
                }],
                newOwnerMessage: ''
            }

        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newOwnerMessage: action.newMessage
            };
        default:
            return state
    }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })

export const onMessageChangeCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessage: text
})

export default dialogsReducer