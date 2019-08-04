// init controller
const controller = new ScrollMagic.Controller();

var containerScene = new ScrollMagic.Scene({
    triggerElement: '#container',
    triggerHook: 0,
    duration: 900
})
    .setPin("#mainimg", {
        pushFollowers: false
    })
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.4, // show, when scrolled 10% into view
    duration: "200%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: -550 // move trigger to center of element
})
    .setClassToggle("#reveal1", "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);



// new ScrollMagic.Scene({
//     triggerElement: "#trigger2",
//     triggerHook: 0.1, // show, when scrolled 10% into view
//     duration: "50%", // hide 10% before exiting view (80% + 10% from bottom)
//     offset: 50 // move trigger to center of element
// })

//     .setClassToggle("#reveal2", "fish")
//     .addIndicators()
//     .addTo(controller);

var tween = TweenMax.to("#reveal2", 1, { rotation: 360, ease: Linear.easeNone });
var tween2 = TweenMax.to("#reveal2", 1, { left: 650 });

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger2", duration: 400 })
    .setTween(tween)
    .setPin("#reveal2", { pushFollowers: false })
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({ triggerElement: "#trigger2", offset: 400, duration: 200 })
    .setTween(tween2)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);



new ScrollMagic.Scene({ triggerElement: "#trigger2", offset: 750, duration: 700 })
    // .setPin("#reveal2")
    .setTween(tween3)
    .setClassToggle("#smaller", "smaller2")
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

var tween3 = TweenMax.to("#smaller", 1, { right: 400 });

new ScrollMagic.Scene({ triggerElement: "#trigger2", offset: 800, duration: 300 })
    // .setPin("#reveal2")
    .setTween(tween3)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

var wipeAnimation = new TimelineMax()
    .fromTo("div.mainimg3", 1, { x: "-100%" }, { x: "0%", ease: Linear.easeNone })  // in from left
    .fromTo("div.mainimg4", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })  // in from right
    .fromTo("div.mainimg5", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
    .fromTo("div.mainimg6", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}) // in from top



    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "300%"
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller)


