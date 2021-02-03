const songs = [{
        id: 1,
        name: "Chương 2 Của Tương Lai",
        image: "./images/chuong-2-cua-tuong-lai.jpeg",
        artist: "Wean, MCK, Tenkitsune",
        country: "Viet Nam"
    },
    {
        id: 2,
        name: "Ai Biet",
        image: "./images/ai-biet.jpeg",
        artist: "Wean",
        country: "Viet Nam"
    },
    {
        id: 3,
        name: "Harder",
        image: "./images/harder.jpeg",
        artist: "Wxrdie, Wokeupat4am",
        country: "Viet Nam"
    },
    {
        id: 4,
        name: "Cried",
        image: "./images/cried.jpeg",
        artist: "Vsoul",
        country: "Viet Nam"
    },
    {
        id: 5,
        name: "Look At Me!",
        image: "./images/look-at-me.jpeg",
        artist: "XXXTENTACION",
        country: "US/UK"
    },
    {
        id: 6,
        name: "Luffy / 19",
        image: "./images/luffy-19.jpeg",
        artist: "HS Robe, Chillinh",
        country: "Viet Nam"
    },
    {
        id: 7,
        name: "Rap Cho Anh Em",
        image: "./images/rap-cho-ae.jpeg",
        artist: "OCEAN MOB, Willistic, Xolitxo, Gill, Obito",
        country: "Viet Nam"
    },
    {
        id: 8,
        name: "Chơi Đồ",
        image: "./images/choi-do.jpeg",
        artist: "MCK, Wxrdie, Sony Tran",
        country: "Viet Nam"
    },
];

let cart = [];

start();

function start() {
    renderListSong();
    countProductInCart();
}

function renderListSong() {
    let htmls = songs.map((song) => {
        return `<div class="product-wrapper-item">
        <div class="product__img">
        <img src=${song.image} alt="">
        </div>
        <div class="product__desc">
        <p class="product__name">
        ${song.name}
        </p>
        <a class="product__artist">
        ${song.artist}
        </a>
        </div>
        <div class="add-product">
        <span class="fi-rr-plus-small"></span>
        </div>
        </div>
        `;
    })
    let listSong = document.getElementById('wrapper-product');
    listSong.innerHTML = htmls.join('');
}

let addProduct = document.querySelectorAll('.add-product');

addProduct.forEach((btn, index) => {
    let indexSongs = songs[index];
    btn.addEventListener('click', function() {
        cart.push(indexSongs);
        countProductInCart();
    })

})

function countProductInCart() {
    let countCart = document.querySelector('.cart__count-product');
    let count = document.querySelector('.cart__count-product span');
    let notification = document.querySelector('.wrapper-add-product');
    if (cart.length == 0) {
        countCart.style.display = 'none';
        notification.innerHTML = `
        <div class="cart-empty">
        <img src="./images/coal.png" alt="" srcset="">
        <p> Cart Empty !</p>
        </div>
        `;

    } else {
        count.innerHTML = cart.length;
        countCart.style.display = 'block';
        let htmls = cart.map((item) => {
            return `
        <div class="new-product-add">
            <div class="new-product-add__item">

                <img src="${item.image}" alt="" srcset="">

                <div class="new-product-add__desc">
                    <p class="new-product-add__title">
                       ${item.name}
                    </p>
                    <p class="new-product-add__artist">
                        ${item.artist}
                    </p>
                </div>
            </div>
        </div>
            `;

        })
        notification.innerHTML = htmls.join(' ');
    }
}