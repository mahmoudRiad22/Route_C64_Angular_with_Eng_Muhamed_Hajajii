/// <reference types="../@types/jquery" />

console.log("hi from inside the js file");
$('.btn1').on("click", function () {
    console.log("hello");
});


//!/ jQuery effects:
//>> Effects:
//*    hide(), show(), toggle()
//*    slideUp(), slideDown(), slideToggle(), slideTo()
//*    fadeIn(), fadeOut(), fadeToggle(), fadeTo()
//*    on()

//>>/ Custom Effect:
//*    animate()

//>>/ setter and getter:
//*    html(), text(), val(), attr(), prop(),
//*    removeAttr(), removeProp()
//*   addClass(), removeClass(), toggleClass(), hasClass()

//*    offset(), position(), scrollTop(), scrollLeft(), scrollHeight(), scrollWidth(),
//*    height(), width(), innerHeight(), innerWidth(), 
//*    outerHeight(), outerWidth()

//*    addClass(), removeClass(), toggleClass()

//*    group(), sequence(), stagger()
//*    keyframes(), style()
//*    transition()
