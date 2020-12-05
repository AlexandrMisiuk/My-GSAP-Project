
//additional-nav classes switch

function whenUserNow(progress) {
    let navSelector1 = document.getElementById('nav-selector1');
    let navSelector2 = document.getElementById('nav-selector2');
    let navSelector3 = document.getElementById('nav-selector3');
    let navSelector4 = document.getElementById('nav-selector4');

    let per = progress * 100;

    if (per < 33) {
        navSelector1.className = 'additional-nav-selector active';
        navSelector2.className = 'additional-nav-selector';
        navSelector3.className = 'additional-nav-selector';
        navSelector4.className = 'additional-nav-selector';
    } else if (per >= 33 && per < 62) {
        navSelector1.className = 'additional-nav-selector';
        navSelector2.className = 'additional-nav-selector active';
        navSelector3.className = 'additional-nav-selector';
        navSelector4.className = 'additional-nav-selector';
    } else if (per >= 62 && per < 85) {
        navSelector1.className = 'additional-nav-selector';
        navSelector2.className = 'additional-nav-selector';
        navSelector3.className = 'additional-nav-selector active';
        navSelector4.className = 'additional-nav-selector';
    } else if (per >= 85 && per <= 100) {
        navSelector1.className = 'additional-nav-selector';
        navSelector2.className = 'additional-nav-selector';
        navSelector3.className = 'additional-nav-selector';
        navSelector4.className = 'additional-nav-selector active';
    }
}



//GSAP animation

function animateFrom(elem, direction) {
    direction = direction | 1;
    
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if(elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 3, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    ScrollTrigger.create({
      trigger: ".wrap",
      start: "top center",
      end: "bottom center",
      onUpdate: self => whenUserNow(self.progress)
    }); // switch classes for additional navigation when scrolling

    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });


  
  //animetion whith rotate characters
document.addEventListener("DOMContentLoaded", function() {
  let element = document.getElementById("heading-part1");
  element.innerHTML = '<span class="hover-rotate1">' + 
  element.innerHTML.split('').join('</span><span class="hover-rotate1">') + '</span>';
});
document.addEventListener("DOMContentLoaded", function() {
  let element = document.getElementById("heading-part2");
  element.innerHTML = '<span class="hover-rotate2">' + 
  element.innerHTML.split('').join('</span><span class="hover-rotate2">') + '</span>';
});
document.addEventListener("DOMContentLoaded", function() {
  let element = document.getElementById("heading-part3");
  element.innerHTML = '<span class="hover-rotate3">' + 
  element.innerHTML.split('').join('</span><span class="hover-rotate3">') + '</span>';
});
// get random number

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("heading-part1").addEventListener("mouseover", function (){
    gsap.fromTo('.hover-rotate1', {
      duration: 0.5,
      delay: 0,
      y: '-80%',
      x: '-80%',
      scale: 0,
      rotation: -540
    },{
      y: 0,
      x: 0,
      scale: 1,
      rotation: 0
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("heading-part2").addEventListener("mouseover", function (){
    gsap.fromTo('.hover-rotate2', {
      duration: 0.5,
      delay: 0,
      y: '80%',
      x: '80%',
      scale: 0,
      rotation: 540
    },{
      y: 0,
      x: 0,
      scale: 1,
      rotation: 0
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("heading-part3").addEventListener("mouseover", function (){
    gsap.fromTo('.hover-rotate3', {
      duration: 0.5,
      delay: 0,
      y: '80%',
      x: '-80%',
      scale: 0,
      rotation: -540
    },{
      y: 0,
      x: 0,
      scale: 1,
      rotation: 0
    });
  });
});
