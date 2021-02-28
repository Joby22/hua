var mySwiper = new Swiper('.swiper-container1', {
    // 默认显示索引为2的这个元素
    // initialSlide: 1,
    grabCursor: true,
    // init: false,
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    }


});
// mySwiper.on('slideChange', function () {
//     console.log(this.activeIndex);
// })


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


