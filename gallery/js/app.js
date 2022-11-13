let photos = []

$(document).ready(function () {
    getGalleryData()
})

function getGalleryData() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos?_limit=10",
        type: 'GET',
    }).done(function (data) {
        photos = data
        renderGallery()
        initGallery()
    });
}

function renderGallery() {
    photos.forEach(function (photo) {
        $('.gallery').append(`<div><img src="${photo.url}"></div>`)
    })
    photos.forEach(function (photo) {
        $('.gallery-nav').append(`<div><img src="${photo.thumbnailUrl}"></div>`)
    })
}

function initGallery() {
    $('.gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.gallery-nav'
    });
    $('.gallery-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.gallery',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
}
