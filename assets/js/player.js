const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const infoAlbumn = $('.main-content__albumn--info .row');
const songOfAlbumn = $('.main-content__albumn--list .row');

const musicToPlayer = $('.music-player .player-title');
const audio = $('#audio');
const btnPlay = $('.player-buttons .btn-play');
const btnForward = $('.player-buttons .btn-forward');
const btnPrevious = $('.player-buttons .btn-back');
const btnRepeat = $('.player-buttons .btn-repeat');
const btnRandom = $('.player-buttons .btn-random');


const play = $('.player-buttons .btn-play .play');
const pause = $('.player-buttons .btn-play .pause');

const getNameOfMusic = $('.music-player .player-title .info .name');


const musicAlbumn = {
    firstAlbumn: [
        {
            name: 'Chill',
            author: "Thanh Dong",
            image: './assets/img/Chill.png',
            description: 'Welcom to the Life kit: Selfcare podcast. Each episode,\n                        we will talk about self-love, mindset, self-development\n                        and all things mental health. Discussing everything...',
            songs: [
                {
                    index: 1,
                    name: '3107',
                    author: 'DuongG, Nâu, W/n',
                    path: './assets/song/3107.mp3',
                    image: './assets/img/3107.png',
                },
                {
                    index: 2,
                    name: 'Anh yêu em nhiều lắm',
                    author: 'Đức Phúc',
                    path: './assets/song/anh-yeu-em-nhieu-lam.mp3',
                    image: './assets/img/ChillAlbumn/anh-yeu-em-nhieu-lam.png'
                },
                {
                    index: 3,
                    name: 'Đưa em về nhà',
                    author: 'GREY D, Chillies',
                    path: './assets/song/dua-em-ve-nha.mp3',
                    image: './assets/img/ChillAlbumn/dua-em-ve-nha.png'
                },
                {
                    index: 4,
                    name: 'Vài câu nói có khiến người thay đổi',
                    author: 'Grey D,TLinh',
                    path: './assets/song/vai-cau-noi-co-khien-nguoi-thay-doi.mp3',
                    image: './assets/img/ChillAlbumn/vai-cau-noi-co-khien-nguoi-thay-doi.png'
                },
                {
                    index: 5,
                    name: '3107-4',
                    author: 'W/n, Erik, Nâu',
                    path: './assets/song/3107-4.mp3',
                    image: './assets/img/ChillAlbumn/3107-4.png'
                }
            ],
        }
    ],

    secondAlbumn: [
        {
            name: "Nhẹ nhàng cùng V-POP",
            author: "Dong",
            image: './assets/img/Nhe nhang.png',
        }
    ],

    thirdAlbumn: [
        {
            name: '3107',
            author: "Erik, Dương Nâu, ...",
            image: './assets/img/3107.png'
        }
    ],

    fouthAlbumn: [
        {
            name: 'Nghe là yêu',
            author: "Nhiều tác giả",
            image: './assets/img/nghelayeu.png'
        }
    ],

    /*Not handle */
    secondList: [
        {
            name: 'About self-love',
            author: "Thanh Dong",
            image: 'https://cdn.dribbble.com/users/809349/screenshots/8845855/media/05c80b1307fca5676559fa42313d509d.jpg?compress=1&resize=1000x750&vertical=center'
        },
        {
            name: "Don't look back",
            author: "Dong",
            image: 'https://cdn.dribbble.com/users/809349/screenshots/8321470/media/47d98c4e4b053b627757f6960995dc33.jpg?compress=1&resize=1000x750&vertical=center'
        },
        {
            name: 'Start to day',
            author: "Alexander",
            image: 'https://cdn.dribbble.com/users/809349/screenshots/13542531/media/e1cbf70c9e3d4219d105a1f7f9e095a8.png?compress=1&resize=800x600&vertical=center'
        },
        {
            name: 'Friday feels',
            author: "John Smith",
            image: 'https://cdn.dribbble.com/users/809349/screenshots/9015880/media/86c8f26656c03c3852fb9a6334c1ca47.jpg?compress=1&resize=1000x750&vertical=center'
        }
    ]

}

const player = {
    currentIndex: 1,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    renderInfo: () => {
        const list = musicAlbumn.firstAlbumn.map(function (albumn) {
            return `
            <div class="image col l-12">
                      <div class="container">
                        <img
                          src="${albumn.image}"
                          alt=""
                        />
                      </div>
                    </div>
             
             <div class="title col l-12">
                      <!--Name and author-->
                      <div class="names">
                        <h2 class="name-of-albumn">${albumn.name}</h2>
                        <p class="name-of-author" style="color: #a6a6a6">
                          by ${albumn.author}
                          <span class="quantity-of-albumn" style="color: #000"
                            >5 eposides</span
                          >
                        </p>
                      </div>

                      <!--Button-->
                      <div class="buttons">
                        <button class="btn-follow">Follow</button>
                        <button class="btn-share">Share</button>
                      </div>
                    </div>  
                    
                     <div class="description col l-12">
                      <h3>About</h3>
                      <p class="desc">
                       ${albumn.description}
                      </p>
                    </div>    
            `
        });

        infoAlbumn.innerHTML = list.join('');
    },

    renderSongs: () => {
        const songs = musicAlbumn.firstAlbumn.map(function (list) {
            return list.songs.map(function (song) {
                return `
        <div class="element col l-12">
        <div class="row">
          <!--Image-->
          <div class="image col l-4" style="padding: 0">
            <img
              src="${song.image}"
              alt=""
            />
          </div>

          <!--Description-->
          <div class="description col l-8">
            <div class="info">
              <div class="name">
                <h4>${song.name}</h4>
                <p>${song.author}</p>
              </div>
              <div class="time">5 mins</div>
            </div>
            <div class="buttons">
              <button
                class="btn-more"
                style="
                  border: 0;
                  height: 35px;
                  background-color: #fff;
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 128 512"
                  style="float: right; width: 100%"
                >
                  <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                  ></path>
                </svg>
              </button>
              <button class="btn-play">
                <svg
                  style="fill: white"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
          `
            })
        });

        songOfAlbumn.innerHTML = songs.join('');
    },
    
    /*Handle with load current song based on index */
    loadSong: function(number) {
        const find = musicAlbumn.firstAlbumn[0].songs.find((song) => {
            return song.index === number;
        });
        musicToPlayer.innerHTML = `
      <div class="img">
      <img src="${find.image}" alt="">
</div>
<div class="info">
      <p class="name">${find.name}</p>
      <p class="author" style="font-size: 0.9em">
        ${find.author}
      </p>
</div>`;
        audio.src = find.path;
    },

    /*Handle for next song*/
    nextSong: () => {
      player.currentIndex++;
      if(player.currentIndex > musicAlbumn.firstAlbumn[0].songs.length){
          player.currentIndex = 0;
      }
      player.loadSong(player.currentIndex);
    },
    
    /*Handle for previous song */
    prevSong: () => {
        player.currentIndex--;
        if(player.currentIndex < 1){
            player.currentIndex = musicAlbumn.firstAlbumn[0].songs.length;
        }
        player.loadSong(player.currentIndex);
    },

    /*Handle for random song */
    randomSong: () => {
      var newIndex;
      var length = musicAlbumn.firstAlbumn[0].songs.length;
      do {
        newIndex = Math.floor(Math.random() * length);
      } while(newIndex === player.currentIndex);
      player.currentIndex = newIndex;
      player.loadSong(player.currentIndex);
    },

    handle: function () {

        /*Handle when user click on any song */
        songOfAlbumn.onclick = (e) => {
            const div = e.target.parentNode.parentNode;

            const description = div.querySelector('.description').classList.toggle('active');
            

            const imgVal = div.querySelector('.image img').getAttribute('src');
            const nameVal = div.querySelector('.description .name h4').textContent;
            const authorVal = div.querySelector('.description .name p').textContent;
            // Variable to search whether song when click is equal song is stored in JavaScript ?
            const find = musicAlbumn.firstAlbumn[0].songs.find(song => song.name === nameVal)
            const path = find.path;

            audio.setAttribute('src', path);
            pause.setAttribute('display', 'none');
            play.setAttribute('display','block');
            this.currentIndex = find.index;
            musicToPlayer.innerHTML = `
        <div class="img">
                  <img src="${imgVal}" alt="">
        </div>

        <div class="info">
                  <p class="name">${nameVal}</p>
                  <p class="author" style="font-size: 0.9em">
                    ${authorVal}
                  </p>
        </div>
        `;
        }
        
        /*Handle when user click on play button */
        btnPlay.onclick = () => {
            if(this.isPlaying){
                play.setAttribute('display', 'none');
                pause.setAttribute('display','block');
                this.isPlaying = !this.isPlaying;
                audio.play();
            } else {
                pause.setAttribute('display', 'none');
                play.setAttribute('display','block');
                this.isPlaying = !this.isPlaying;
                audio.pause();
            }
        }

        /*Handle when user click on forward button */
        btnForward.onclick = () => {
          if(player.isRandom){
            player.randomSong();
          } else {
            player.nextSong();
          }
          audio.play();
        }
        
        /*Handle when user click on previous button*/
        btnPrevious.onclick = () => {
            if(player.isRandom) {
              player.randomSong();
            } else {
                player.prevSong();
            }
            audio.play();
        }

        /*Handle when user click on repeat button */
        btnRepeat.onclick = () => {
          player.isRepeat = !player.isRepeat;
          $('.player-buttons .btn-repeat svg').classList.toggle('active', player.isRepeat);
        }

        /*Handle when user click on random button */
        btnRandom.onclick = () => {
          this.isRandom = !this.isRandom;
          $('.player-buttons .btn-random svg').classList.toggle('active', player.isRandom); 
        }

        /*Handle when audio ended */
        audio.onended = () => {
          if(player.isRepeat){
            audio.play();
          } else {
            btnForward.click();
          }
        }
        


        
    },
    start: function () {
        player.handle();
        player.renderInfo();
        player.renderSongs();
        player.loadSong(player.currentIndex)
    }
}

player.start();

