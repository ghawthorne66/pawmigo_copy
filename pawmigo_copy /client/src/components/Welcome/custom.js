ScrollReveal().reveal('.load1',
 { 
  duration   : 600,
  distance   : '20px',
  easing     : 'ease-out',
  origin     : 'bottom',
  scale      : 1,
 })
ScrollReveal().reveal('.load2', { 
  delay: 500,
  duration   : 600,
  distance   : '20px',
  easing     : 'ease-out',
  origin     : 'bottom',
  reset      : true,
  scale      : 1, })
ScrollReveal().reveal('.load3', { 
  delay: 1000,
  duration   : 600,
  distance   : '20px',
  easing     : 'ease-out',
  origin     : 'bottom',
  reset      : true,
  scale      : 1,
 })
 ScrollReveal().reveal('.load4', { 
  delay: 1500,
  duration   : 600,
  distance   : '20px',
  easing     : 'ease-out',
  origin     : 'bottom',
  reset      : true,
  scale      : 1,
 })

 new Typed('#typed',{
  strings : ['..Information to improve on','..your pet resource', '..DNA results ', `..Free Tacos`],
  typeSpeed : 100,
  delaySpeed : 100,
  loop : true
});


// ADDS JS for WORK SECTION

(function scrollReveal() {
  window.sr = ScrollReveal();
  
ScrollReveal().reveal('.card', {   
  duration   : 600,
  distance   : '20px',
  easing     : 'ease-in',
  origin     : 'bottom',
  reset      : true,
  scale      : 1,
  viewFactor : 0,
});
})();


// ADDS JS for THEME CHANGERS
// add a click event listener to the element with the class `theme-button`
$(".theme-button").click(function() {
  // store the id of the button that was clicked ($(this)) in the 'theme' variable
  var theme = $(this).attr("id");

  // store a reference to the element with the id 'theme-stylesheet'
  var $styleLink = $("#theme-stylesheet");

  // if the id of the button that was clicked was 'dark' ...
  if (theme === "dark") {
    $styleLink.attr("href", "https://bootswatch.com/4/darkly/bootstrap.css");
  }
  else if (theme === "light") {
    $styleLink.attr("href", "css/custom-styles.css");
  }
});