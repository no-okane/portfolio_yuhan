const mainslide = new Swiper ('#mainslide',{
    loop:true,
     slidesPerView: 2, 
     spaceBetween: 800,
    autoplay:{
        delay:3500,
        disableOnInteraction: false,
    },
    speed:3000,
    navigation:{
        prevEl:'#mainslide ~ .swiper-button-prev',
        nextEl:'#mainslide ~ .swiper-button-next',
    },
    scrollbar:{
        el:'#mainslide .swiper-scrollbar',
        draggable: true,
        hide: false,
    },
    pagination: {
        el: "#mainslide .swiper-pagination",
        type: "fraction",
        clickable: true,
    },
})

console.log('Next 버튼:', document.querySelector('#mainslide ~ .swiper-button-next'));
console.log('스크롤바:', document.querySelector('#mainslide .swiper-scrollbar'));
console.log('페이지:', document.querySelector('#mainslide .swiper-pagination'));


const adBnr = new Swiper ('#ad_bnr',{
    loop:true,
    autoplay:{
        delay:3500,
        disableOnInteraction: false,
    },
    speed:3000,
    navigation:{
        nextEl:'#ad_bnr .swiper-button-next',
        prevEl:'#ad_bnr .swiper-button-prev',
    },
    scrollbar:{
        el:'#ad_bnr + .swiper-controls .swiper-scrollbar'
    },
    pagination: {
        el: "#ad_bnr + .swiper-controls .pagination_deco .swiper-pagination",
        type: "fraction",
        clickable: true,
    },
})


const timesale = new Swiper ('#timesale',{
    loop:true,
    speed:2500,
    navigation:{
        nextEl:'#timesale ~ .swiper-button-next',
        prevEl:'#timesale ~ .swiper-button-prev',
    },
})


const new1 = new Swiper ('#new',{
    loop:true,
    speed:2500,
    navigation:{
        nextEl:'#new ~ .swiper-button-next',
        prevEl:'#new ~ .swiper-button-prev',
    },
})


const best = new Swiper ('#best',{
    loop:true,
    pagination: {
        el: "#best ~ .swiper-controls .pagination_deco .swiper-pagination",
        type: "fraction",
        clickable: true,
    },
})

const rebuy = new Swiper ('#rebuy',{
    loop:true,
    pagination: {
        el: "#rebuy ~ .swiper-controls .pagination_deco .swiper-pagination",
        type: "fraction",
        clickable: true,
    },
})


const recommen = new Swiper ('#recommen',{
    loop:true,
    pagination: {
        el: "#recommen ~ .swiper-controls .pagination_deco .swiper-pagination",
        type: "fraction",
        clickable: true,
    },
})