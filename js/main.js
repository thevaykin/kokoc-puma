window.onload = function () {
    let but1 = document.querySelectorAll('.nav__item');
    let but2 = document.getElementById('menu-toggle');

    for (var i = but1.length; i--;) {
        but1[i].addEventListener('click', function () {
            but2.click();
        });
    }
};if(window.innerWidth < 900) {
    $('.gallary__slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}    


if(window.innerWidth >=900 && window.innerWidth < 1200) {
    $('.gallary__slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });
}    

if(window.innerWidth >=1200 && window.innerWidth < 1600) {
    $('.gallary__slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
}
if (window.innerWidth >=1600) {
    $('.gallary__slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });
};$('.multiple-items').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
});;if(window.innerWidth < 900) {
    $('.testimonials__slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}    

$('.testimonials__slider').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3NlQnVyZ2VyTWVudS5qcyIsImdhbGxhcnlTbGlkZXIuanMiLCJtYWluU2xpZGVyLmpzIiwidGVzdGltb25pYWxzU2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGJ1dDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19pdGVtJyk7XHJcbiAgICBsZXQgYnV0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXRvZ2dsZScpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSBidXQxLmxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgIGJ1dDFbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJ1dDIuY2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImlmKHdpbmRvdy5pbm5lcldpZHRoIDwgOTAwKSB7XHJcbiAgICAkKCcuZ2FsbGFyeV9fc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICB9KTtcclxufSAgICBcclxuXHJcblxyXG5pZih3aW5kb3cuaW5uZXJXaWR0aCA+PTkwMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDApIHtcclxuICAgICQoJy5nYWxsYXJ5X19zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICB9KTtcclxufSAgICBcclxuXHJcbmlmKHdpbmRvdy5pbm5lcldpZHRoID49MTIwMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDE2MDApIHtcclxuICAgICQoJy5nYWxsYXJ5X19zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICB9KTtcclxufVxyXG5pZiAod2luZG93LmlubmVyV2lkdGggPj0xNjAwKSB7XHJcbiAgICAkKCcuZ2FsbGFyeV9fc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogNFxyXG4gICAgfSk7XHJcbn0iLCIkKCcubXVsdGlwbGUtaXRlbXMnKS5zbGljayh7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDFcclxufSk7IiwiaWYod2luZG93LmlubmVyV2lkdGggPCA5MDApIHtcclxuICAgICQoJy50ZXN0aW1vbmlhbHNfX3NsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgfSk7XHJcbn0gICAgXHJcblxyXG4kKCcudGVzdGltb25pYWxzX19zbGlkZXInKS5zbGljayh7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDFcclxufSk7Il19
