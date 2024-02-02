document.addEventListener('DOMContentLoaded', function() {
    var slide1 = document.querySelector('#slide1');
    var slide2 = document.querySelector('#slide2');
    var slide3 = document.querySelector('#slide3');
    var s1 = document.querySelector('#s1');
    var s2 = document.querySelector('#s2');
    var s3 = document.querySelector('#s3');
  
    slide1.style.display = 'none';
    slide3.style.display = 'none';
    slide2.style.display = 'block';
  
    s1.addEventListener('click', function() {
      slide1.style.display = 'block';
      slide2.style.display = 'none';
      slide3.style.display = 'none';
    });
  
    s2.addEventListener('click', function() {
      slide2.style.display = 'block';
      slide1.style.display = 'none';
      slide3.style.display = 'none';
    });
  
    s3.addEventListener('click', function() {
      slide3.style.display = 'block';
      slide1.style.display = 'none';
      slide2.style.display = 'none';
    });
  });

  setTimeout(function() {
    document.querySelector('.info').classList.add('show');
}, 1000);

// let heading = document.getElementsByClassName("contacts")[0];

// window.onscroll = function() {
//   if (window.scrollY >= 200) {
//     heading.style.cssText = "position: fixed; z-index: 100; border-bottom: 3px solid var(--main-color);width:100% ; top:0; background-color:white;margin-left: -187px";
//   } else {
//     heading.style.position = "static"; // Reset position if not scrolled enough
//   }
//   if(window.scrollY===0){
//     heading.style.cssText = "position:static;margin-left:0"; 
//   }
// };


