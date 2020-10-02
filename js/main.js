
// Toggle menu jquery
  $('.icon').click(function(){
        $('span').toggleClass("cancel");
      });
    $('.ican').click(function(){
        $('span').toggleClass("cancel");
      });

// Toggle menu




// Swipper
$(document).ready(function() {
  $('.card-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});


// login page


const toggleForm = () => {
  const container = document.querySelector('.loginbxz');
  container.classList.toggle('active');
};


// about page
