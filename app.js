document.getElementById("dropdownButton").addEventListener("click", function () {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
  });
  document.getElementById("dropdownB").addEventListener("click", function () {
    document.getElementById("dropdownM").classList.toggle("hidden");
  });



  var swiper = new Swiper(".swiper", {
      loop: true,
      autoplay: {
          delay: 4000,
          disableOnInteraction: false
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
  });
  function add(){
   
  }
