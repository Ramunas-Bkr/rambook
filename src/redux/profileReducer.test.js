import profileReducer, { addPostCreator } from "./profileReducer";

let state = {
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
};

it('length of posts shoul be incremented', () => {
    let action = addPostCreator("rambook")
    
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

it('new message by posts should be "rambook"', () => {
    let action = addPostCreator("rambook")
    
    let newState = profileReducer(state, action);

    expect(newState.posts[3].message).toBe("rambook");
});
