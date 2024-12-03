let items = document.querySelectorAll('.slider .list .item');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let itemActive = 0;

function updateSlider(index) {
    document.querySelector('.slider .list .item.active').classList.remove('active');
    document.querySelector('.thumbnail .item.active').classList.remove('active');
    items[index].classList.add('active');
    thumbnails[index].classList.add('active');
}

next.onclick = () => {
    itemActive = (itemActive + 1) % items.length;
    updateSlider(itemActive);
};

prev.onclick = () => {
    itemActive = (itemActive - 1 + items.length) % items.length;
    updateSlider(itemActive);
};

thumbnails.forEach((thumbnail, index) => {
    thumbnail.onclick = () => {
        itemActive = index;
        updateSlider(itemActive);
    };
});

setInterval(() => next.click(), 5000);
