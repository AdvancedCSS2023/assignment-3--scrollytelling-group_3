//STEP 1 - choose element to observe 
const sections = document.querySelectorAll("span");

/****** INTERSECTION OBSERVER  ******/
//STEP 2 - declare options
const options = {};

//STEP 3 - tell Intersection Observer what should it do with HTML element

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

//STEP 4 - tell intersection observer how to behav
    entry.target.classList.toggle("purple");
  });
}, options);

//STEP 5 - adding observer to HTML element
sections.forEach((span) => {
  observer.observe(span);
});