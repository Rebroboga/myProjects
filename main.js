// accordion

new Accordion('.accordion__list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

let wrap = document.querySelector('.about-me__translate-en');
let about = document.querySelectorAll('.about-me__text');
let color = document.querySelector('.about-me__translate-ru');
let block = document.querySelector('.achievements__image');
let fixed = document.querySelectorAll('.accordion__control');

wrap.addEventListener('click', function() {

  wrap.classList.add('color--active');

  color.classList.remove('color--active')

  about.forEach(function(e) {
    e.classList.add('wrap--active');
  })
})

color.addEventListener('click', function() {

  wrap.classList.remove('color--active');
  wrap.classList.remove('active');

  color.classList.add('color--active');
})

// fixed.forEach(item => {
//   item.addEventListener('click', function() {
    
//     fixed.forEach(elem => 
//       elem.classList.remove('orange--active'));
//       this.classList.toggle('orange--active');

//   })
// })

