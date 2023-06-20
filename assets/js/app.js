const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playlist = $('.main .main-content .main-content__first-albumn .row');


const app = {
    lists: [
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
    ],

    renderLists: function()  {
        const htmls = this.lists.map(function(list) {
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
        playlist.innerHTML = htmls.join('');

    },

    handleEvent: () => {
    },
    start: () => {
        app.handleEvent();
        app.renderLists();
    }
};

app.start();