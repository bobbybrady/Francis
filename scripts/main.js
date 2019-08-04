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
var tween2 = TweenMax.to("#reveal2", 1, { left: 650});

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger2", duration: 400 })
    .setTween(tween)
    .setPin("#reveal2", { pushFollowers: false })
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#trigger2", offset:400, duration: 200 })
    .setTween(tween2)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#trigger2", duration: 400 })
    .setVelocity("#image")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
