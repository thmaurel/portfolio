

const scrolls = document.querySelectorAll('.scroll-down');
scrolls.forEach((scroll) => {
  scroll.addEventListener('click', (event) => {
    window.scrollBy({
      top: window.innerHeight, // could be negative value
      left: 0,
      behavior: 'smooth'
    });
  })
})

const mySiema2 = new Siema({
  selector: '.siema2',
  duration: 1450,
  loop: true,
  easing: 'ease-out',
});

// listen for keydown event
setInterval(() => mySiema2.next(), 3000)

const mySiema = new Siema({
  duration: 1450,
  loop: true,
  easing: 'ease-out',
});

// listen for keydown event
setInterval(() => mySiema.next(), 3000)


