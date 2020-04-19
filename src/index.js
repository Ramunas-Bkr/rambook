import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const posts = [
  {
      id: 1,
      message: 'Šiuo metu pasaulis užsidaręs. Turizmo srityje viskas sustojo. konomika krenta žemyn. Kelionės arba prisiminimuose, arba svajonėse.',
      image: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP2538-CUSA05620_00-AV00000000000108/1584036216000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
      likecount: 20
  },
  {
      id: 1,
      message: 'Sveiki gyvi! Nors del dabartines situacijos visi priversti siek tiek sustoti, pazaiskim! Imeskite savo ispudingiausia uzfiksuota akimirka 😍 tikiu, kad turite ju daugybe 😎 pakeliaukime cia ir dabar! Mano akimirka is zygio i Trolio liezuvi Grazios dienos!',
      image: 'https://avatarfiles.alphacoders.com/212/212278.jpg',
      likecount: 15
  },
  {
      id: 1,
      message: 'Sveiki! Domina ar keiciant i identiska kelione 2021 metams jums pakilo keliones kaina, del to kad keiciasi vaiku amzius siais metais yra 2 ir 4 m. o kadangi kitais metais vaikai didesni ir agentura teigia jog kambario tipas keiciasi privalomai. (Novaturas) mes sutinkame likti to pacio tipo kambaryje, bet teigia kad neimanoma, reik moketi priemoka ir viskas.',
      image: 'https://avatarfiles.alphacoders.com/127/thumb-127585.jpg',
      likecount: 5
  }
];

const dialogsItem = [
  { id: 1, name: 'Ramūnas' },
  { id: 2, name: 'Živilė' },
  { id: 3, name: 'Elzė' },
  { id: 4, name: 'Monmorensis' },
];

const messages = [
  {id: 5, message:'Labas, kaip tu laikais?'},
  {id: 6, message:'Ką tu? Ką vakare?'},
  {id: 7, message:'Nieko visai'}
]


const app = (
  <BrowserRouter>
    <App posts={posts} dialogsItem={dialogsItem} messages={messages} />
  </BrowserRouter>
)


ReactDOM.render(
  <React.StrictMode>
      {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
