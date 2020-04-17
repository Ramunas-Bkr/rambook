import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
    return (
        <div className={classes.MyPosts}>
            My posts
            <div>
                New posts
            </div>
            <Post
                message='Šiuo metu pasaulis užsidaręs. Turizmo srityje viskas sustojo.
                Ekonomika krenta žemyn. Kelionės arba prisiminimuose, arba svajonėse.
                Pasidalinkite savo įžvalgomis:
                kai vieną dieną pasaulis vėl atsivers,
                ar keliausite iš karto, ar kurį laiką susilaikyite nuo kelionių į
                užsienį? Ar keisis kelionių kryptis?'
                image='https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP2538-CUSA05620_00-AV00000000000108/1584036216000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000'
                likecount='20'
            />
            <Post
                message='Sveiki gyvi! Nors del dabartines situacijos visi priversti siek tiek sustoti, pazaiskim! Imeskite savo ispudingiausia uzfiksuota akimirka 😍 tikiu, kad turite ju daugybe 😎 pakeliaukime cia ir dabar! Mano akimirka is zygio i Trolio liezuvi Grazios dienos!'
                image='https://avatarfiles.alphacoders.com/212/212278.jpg'
                likecount='15'
            />
            <Post
                message='Sveiki!
                Domina ar keiciant i identiska kelione 2021 metams jums pakilo keliones kaina, del to kad keiciasi vaiku amzius siais metais yra 2 ir 4 m. o kadangi kitais metais vaikai didesni ir agentura teigia jog kambario tipas keiciasi privalomai. (Novaturas) mes sutinkame likti to pacio tipo kambaryje, bet teigia kad neimanoma, reik moketi priemoka ir viskas.'
                image='https://avatarfiles.alphacoders.com/127/thumb-127585.jpg'
                likecount='5'
            />

        </div>
    )
}

export default MyPosts
