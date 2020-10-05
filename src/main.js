// // let nCount = selector => {
// //   $(selector).each(function () {
// //     $(this)
// //       .animate({
// //         Counter: $(this).text()
// //       }, {
// //         // A string or number determining how long the animation will run.
// //         duration: 4000,
// //         // A string indicating which easing function to use for the transition.
// //         easing: "swing",
// //         /**
// //          * A function to be called for each animated property of each animated element. 
// //          * This function provides an opportunity to
// //          *  modify the Tween object to change the value of the property before it is set.
// //          */
// //         step: function (value) {
// //           $(this).text(Math.ceil(value));
// //         }
// //       });
// //   });
// // };

// // let a = 0;
// // $(window).scroll(function () {
// //   // The .offset() method allows us to retrieve the current position of an element  relative to the document
// //   let oTop = $(".numbers").offset().top - window.innerHeight;
// //   if (a == 0 && $(window).scrollTop() >= oTop) {
// //     a++;
// //     nCount(".rect > h1");
// //   }
// // });



// // /**
// //  *
// //  *  sticky navigation
// //  *
// //  */

// // let navbar = $(".navbar");

// // $(window).scroll(function () {
// //   // get the complete hight of window
// //   let oTop = $(".section-2").offset().top - window.innerHeight;
// //   if ($(window).scrollTop() > oTop) {
// //     navbar.addClass("sticky");
// //   } else {
// //     navbar.removeClass("sticky");
// //   }
// // });


// $(document).ready(function () {


//     let $btns = $('.project-area .button-group button');


//     $btns.click(function (e) {

//         $('.project-area .button-group button').removeClass('active');
//         e.target.classList.add('active');

//         let selector = $(e.target).attr('data-filter');
//         $('.project-area .grid').isotope({
//             filter: selector
//         });

//         return false;
//     })

//     $('.project-area .button-group #btn1').trigger('click');

//     $('.project-area .grid .test-popup-link').magnificPopup({
//         type: 'image',
//         gallery: { enabled: true }
//     });


//     // Owl-carousel

//     $('.site-main .about-area .owl-carousel').owlCarousel({
//         loop: true,
//         autoplay: true,
//         dots: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             560: {
//                 items: 2
//             }
//         }
//     })

//     // sticky navigation menu

//     let nav_offset_top = $('.header_area').height() + 50;

//     function navbarFixed() {
//         if ($('.header_area').length) {
//             $(window).scroll(function () {
//                 let scroll = $(window).scrollTop();
//                 if (scroll >= nav_offset_top) {
//                     $('.header_area .main-menu').addClass('navbar_fixed');
//                 } else {
//                     $('.header_area .main-menu').removeClass('navbar_fixed');
//                 }
//             })
//         }
//     }

//     navbarFixed();

// });