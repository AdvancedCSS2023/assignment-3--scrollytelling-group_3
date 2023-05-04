//This code selects all HTML elements with the CSS class name 'mercury' and assigns them to the 'scrollAnimations' variable using the method 'document.querySelectorAll()'.
const scrollAnimations = document.querySelectorAll('.mercury, .three-wave, .animation-from-left, .animation-from-right');

//This code uses an IntersectionObserver to trigger a function when an element enters the viewport. It then adds or removes the class 'animation-mercury' to the intersecting elements.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation-rise');
      entry.target.classList.add('animation-sides');

    } else {
      entry.target.classList.remove('animation-rise');
      entry.target.classList.remove('animation-sides');

    }
  })
}, {
  threshold: 0.4
});

//In step 1, we selected certain elements with the class "scrollAnimations". In step 2, we set up an observer to watch for these elements. The observer loops through each element and calls the observe() method to track when it intersects with the viewport.
for (let i = 0; i < scrollAnimations.length; i++) {
  const el = scrollAnimations[i];

  observer.observe(el);
}