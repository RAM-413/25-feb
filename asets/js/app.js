$('.slide').slick({

    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,

    prevArrow: '.prev-arrow',
    nextArrow: '.nxt-arrow',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,


        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

        }
    },

    ]
});

let AddBtn = document.querySelector(".add");
let SubBtn = document.querySelector(".sub");
let p = document.querySelector(".number");
AddBtn.addEventListener("click", function () { p.innerHTML = +p.innerHTML + 1; SaveBtn.classList.remove("btn-disabled"); })
SubBtn.addEventListener("click", function () { p.innerHTML = +p.innerHTML - 1; SaveBtn.classList.remove("btn-disabled"); })
let time = document.querySelector("time");

var countDownDate = new Date("october, 29, 2023 15:37:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + " : " + hours + " : "
        + minutes + "  : " + seconds + "  ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);