function reveal() {
    var reveals = document.querySelectorAll(".box");
    var overlay = document.querySelector(".overlay")
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        overlay.classList.add("hover")
      } else {
        reveals[i].classList.remove("active");
        overlay.classList.remove("hover")
      }
    }
  }
  
  window.addEventListener("scroll", reveal);