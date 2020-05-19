const ADD_MESSAGE = 'ADD_MESSAGE';

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
                    ownersMessage: action.newOwnerMessage,
                    friendsMessage: 'Gerai'
                }],
            }
        default:
            return state
    }
}

export const addMessageCreator = (newOwnerMessage) => ({ type: ADD_MESSAGE, newOwnerMessage })

export default dialogsReducer