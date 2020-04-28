// import profileReducer from "../redux/profileReducer";
// import dialogsReducer from "../redux/dialogsReducer";
// import navbarReducer from "../redux/navbarReducer";

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {
//                     id: 1,
//                     message: 'Šiuo metu pasaulis užsidaręs. Turizmo srityje viskas sustojo. konomika krenta žemyn. Kelionės arba prisiminimuose, arba svajonėse.',
//                     likecount: 20
//                 },
//                 {
//                     id: 2,
//                     message: 'Sveiki gyvi! Nors del dabartines situacijos visi priversti siek tiek sustoti, pazaiskim! Imeskite savo ispudingiausia uzfiksuota akimirka 😍 tikiu, kad turite ju daugybe 😎 pakeliaukime cia ir dabar! Mano akimirka is zygio i Trolio liezuvi Grazios dienos!',
//                     likecount: 15
//                 },
//                 {
//                     id: 3,
//                     message: 'Sveiki! Domina ar keiciant i identiska kelione 2021 metams jums pakilo keliones kaina, del to kad keiciasi vaiku amzius siais metais yra 2 ir 4 m. o kadangi kitais metais vaikai didesni ir agentura teigia jog kambario tipas keiciasi privalomai. (Novaturas) mes sutinkame likti to pacio tipo kambaryje, bet teigia kad neimanoma, reik moketi priemoka ir viskas.',
//                     likecount: 5
//                 }
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogsItem: [
//                 {
//                     id: 1,
//                     name: 'Ramūnas',
//                     avatar: 'https://pickaface.net/gallery/avatar/ramadani.asal51e53d14276d6.png'
//                 },
//                 { 
//                     id: 2, 
//                     name: 'Živilė',
//                     avatar: 'https://previews.123rf.com/images/kakigori/kakigori1711/kakigori171100013/90684669-pretty-young-blonde-woman-with-smiling-face-expression-avatar.jpg'
//                 },
//                 { 
//                     id: 3,
//                     name: 'Elzė',
//                     avatar: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131304884/original/190ac627bd2074add9e3281828ee8ac7ac725380/make-you-a-random-anime-girl-avatar.jpg'
//                 },
//                 { 
//                     id: 4,
//                     name: 'Monmorensis',
//                     avatar:'https://3.bp.blogspot.com/-Ky_vFN5_XSM/TmSEibyZVkI/AAAAAAAAAyY/TwBlb-cgouo/s1600/Funny+avatar+pic+angry+dog.jpg'
//                 }
//             ],
//             newOwnerMessage: '',
//             messages: [
//                 {
//                     ownersMessage: 'Labas, kaip tu laikais?',
//                     friendsMessage: 'Labas'
//                 },
//                 {
//                     ownersMessage: 'Ką tu? Ką vakare?',
//                     friendsMessage: 'Nieko visai'
//                 },
//                 {
//                     ownersMessage: 'Gal į virtuvę?',
//                     friendsMessage: 'Tingiu'
//                 },
                
//             ]
//         },
//         navbar: {
//             friends: [
//                 {
//                     name: 'Elzė',
//                     avatar: 'https://pickaface.net/gallery/avatar/unr_elzeneniskyte_180206_2028_3g9mv.png',
//                 },
//                 {
//                     name: 'Živilė',
//                     avatar: 'https://pbcdn1.podbean.com/imglogo/image-logo/1497538/Avatar_Commission_Final2.jpg',
//                 },
//                 {
//                     name: 'Monmis',
//                     avatar: 'https://i.pinimg.com/originals/7a/81/59/7a81592e6e35c6f71cb96a10a73d8729.jpg',
//                 },
//             ]
//         }
//     },
//     _callSubscriber(){
        
//     },

//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },

//     dispatch(action) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.navbar = navbarReducer(this._state.navbar, action)

//         this._callSubscriber(this._state)

//     }
    
// };


// export default store;
// window.store = store;