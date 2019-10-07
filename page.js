/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

    
      window.location.hash = hash;
      });
    } 
  });
})



$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== ""){
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

/*mouse trail */
;(function(main) {
    main();
  })(function() {

    'use strict';

    var c = document.getElementById('c');
    var ctx = c.getContext('2d');

    var WIDTH = c.width = window.innerWidth;
    var HEIGHT = c.height = window.innerHeight;
    var mouse = {
      x: 0,
      y: 0,
      isMoved: false
    };

    var Particle = function() {
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
      this.r = 255;
      this.g = 255;
      this.b = 255;
      this.a = 0;
      this.life = 0;
      this.radius = Math.random() * 5;
    };

    Particle.prototype = {
      constructor: Particle,
      update: function() {
        if(this.life > 0) {
          this.life -= 2;
          if(this.life < 50) {
            this.vx += Math.random() * 4 - 2;
            this.vy += Math.random() * 4 - 2;
            this.vx *= 0.9;
            this.vy *= 0.9;
            this.x += this.vx;
            this.y += this.vy;
            this.a = this.life / 50;            
          }
        }
      },
      render: function(ctx) {
        ctx.save();
        ctx.fillStyle = 'rgba('+ this.r + ', ' + this.g + ', ' + this.b + ', ' + this.a +')';
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      },
      reset: function(tx, ty) {
        this.x = tx;
        this.y = ty;
        this.vx = Math.random() * 4 - 1;
        this.vy = Math.random() * 4 - 1;
        this.life = 150;
        this.a = 1;
        this.g = Math.round(255 * (this.x / WIDTH));
        this.b = Math.round(255 * (this.y / HEIGHT));
        this.radius = Math.random() * 5;
      }
    };

    var particles = [];
    var particle = null;
    var particleCount = 500;
    var tx = 0;
    var ty = HEIGHT / 2;
    var idx = 0;
    var temp = {
      vx: Math.random() * 4 - 2,
      vy: Math.random() * 4 - 2,
      x: WIDTH / 2,
      y: HEIGHT / 2
    }

    for(var i = 0; i < particleCount; i++) {
      particle = new Particle();
      particles.push(particle);
    }

    function spawn(target) {

      tx += (target.x - tx) * 0.2;
      ty += (target.y - ty) * 0.2;

      particles[idx].reset(tx, ty);
      if(++idx >= particles.length) idx = 0;

    }

    c.addEventListener('mousemove', function(e) {

      var rect = c.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isMoved = true;

      spawn(mouse);

    });

    requestAnimationFrame(function loop() {
      requestAnimationFrame(loop);
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      if(!mouse.isMoved) {
        temp.vx += Math.random() * 4 - 2;
        temp.vy += Math.random() * 4 - 2;
        temp.vx *= 0.98;
        temp.vy *= 0.98;
        temp.x += temp.vx;
        temp.y += temp.vy;
        if(temp.x > WIDTH) {
          temp.x = WIDTH;
          temp.vx *= -1;
        }
        if (temp.x < 0) {
          temp.x = 0;
          temp.vx *= -1;
        }
        if(temp.y > HEIGHT) {
          temp.y = HEIGHT;
          temp.vy *= -1;
        }
        if(temp.y < 0) {
          temp.y = 0;
          temp.vy *= -1;
        }       
        spawn(temp);
      }

      for(var i = 0; i < particleCount; i++) {
        particle = particles[i];
        particle.update();
        particle.render(ctx);
      }
    });


  });

/* section 5 */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
  /* section 6 form validation*/
  function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

/* section 5 */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
