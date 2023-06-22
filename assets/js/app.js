const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const firstAlbums = $('.main .main-content .main-content__albumn.first .row');
const secondAlbumns = $('.main .main-content .main-content__albumn.second .row');
const authors = $('.main .main-content .main-content__first-hint-line .trending-authors .row');

const musicList = {
    firstLists: [
    {
        name: 'Chill',
        author: "Thanh Dong",
        image: './assets/img/Chill.png',
    },
    {
        name: "Nhẹ nhàng cùng V-POP",
        author: "Dong",
        image: './assets/img/Nhe nhang.png',
    },
    {
        name: '3107',
        author: "Erik, Dương Nâu, ...",
        image: './assets/img/3107.png'
    }, 
    {
        name: 'Lofi chill',
        author: "Nhiều tác giả",
        image: './assets/img/Lofi Guitar.png'
    }
            ],
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


const app = {
    authors: [
        {
            name: 'Đức Phúc',
            image: 'https://image.plo.vn/w653/Uploaded/2020/xpckxpiu/2019_09_30/duc-phuc-plo_cobq.jpg'
        },
        {
            name: 'Đen Vâu',
            image: 'https://yt3.ggpht.com/a/AGF-l7_2Kpo-9qJB5L1fGnr2P2Z49KPdMoJzFNHH2w=s900-mo-c-c0xffffffff-rj-k-no'
        },
        {
            name: 'Sơn Tùng MTP',
            image: 'https://i.ytimg.com/vi/mkS9jRql7eI/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHOBYAC0AWKAgwIABABGDEgTyhyMA8=&rs=AOn4CLBrh7Nd14cznMbPbvw8SEsFNky1CQ'
        },
        {
            name: 'Erik',
            image: 'https://nhachay.vn/wp-content/uploads/2020/12/0-1581412914.jpg'
        }
    ],

    renderAuthors: function()  {
        const htmls = this.authors.map(function(author) {
            return `
            <div class="author col l-3">
                        <a href="">
                          <div class="image offset">
                            <img
                              src="${author.image}"
                              alt=""
                            />
                          </div>
                          <p class="name">${author.name}</p>
                        </a>
                      </div>`
        })

        authors.innerHTML = htmls.join('');
    },
    renderLists: function()  {
        const first = musicList.firstLists.map(function(list) {
            return `<div class="col l-3 list">
                    <a href="" class="list-image">
                      <img
                        src="${list.image}"
                        alt=""
                      />
                    </a>
                    <p class="list-title space">${list.name}</p>
                    <p class="list-author space">by ${list.author}</p>
                  </div>`
        });
        firstAlbums.innerHTML = first.join('');

        const second = musicList.secondList.map(function(list) {
            return `<div class="col l-3 list">
                    <a href="" class="list-image">
                      <img
                        src="${list.image}"
                        alt=""
                      />
                    </a>
                    <p class="list-title space">${list.name}</p>
                    <p class="list-author space">by ${list.author}</p>
                  </div>`
        });
        secondAlbumns.innerHTML = second.join('');

    },

    handleEvent: () => {
    },
    start: () => {
        app.handleEvent();
        app.renderLists();
        app.renderAuthors();
    }
};

app.start();