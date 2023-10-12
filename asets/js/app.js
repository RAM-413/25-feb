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
$('.slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '.1prev-arrow',
    nextArrow: '.2nxt-arrow',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },

    ]
});


$('.slick2').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'Linear',
    slidesToShow: 8,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'Linear',
            speed: 1000,
        }
    },
    {
        breakpoint: 650,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    },
    {
        breakpoint: 580,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    }
    ]

})


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



//  let icon = document.querySelector(".icon");
// let page = document.querySelector(".mobile-view");
// icon.addEventListener("click", function () {
//     if (page.classList !== document.querySelector(".right-0")) {
//         page.classList.toggle("right-0");
//     }
//  })

// let label = document.querySelector(".icon");
// let menu = document.querySelector(".mobile-view");
// let open = 0;
// aTags.forEach((c) => {
//     c.addEventListener("click", () => {
//         if (open != 0) {
//             menu.style.right = '-100%';
//             document.body.classList.remove("overflow-y-hidden");
//             label.classList.remove("label-switch"); open--;
//         }
//     })
// })

// label.addEventListener("click", () => {
//     if (open == 0) {
//         menu.style.right = 0;
//         document.body.classList.add("overflow-y-hidden");
//         label.classList.add("label-switch");
//         open++;
//     } else {
//         menu.style.right = '-100%';
//         document.body.classList.remove("overflow-y-hidden");
//         label.classList.remove("label-switch");
//         open--;
//     }
// });