let controller = new ScrollMagic.Controller();
let timelineDay = gsap.timeline();
let timelineNight = gsap.timeline();

timelineDay

    .fromTo('.clouds-daytime', 3, {opacity: 0}, {opacity: 1, y: 300, duration: 3})
    .fromTo('.asset-credits', 0.2, {opacity: 1}, {opacity: 0, duration: 3}, '-=3')
    .to('.city', 3, {y: 80, duration: 3}, '-=3')
    .fromTo('.bg1', 3, {y: 0}, {y: -50, duration: 3}, '-=3')
    .fromTo('.day-title', 3,{color: '#92b5ce'}, {x: -100, color: '#E6EBF3', opacity: 0.5, duration: 3}, '-=3')
    .fromTo('.text', 3, {opacity: 0, x: -200}, {opacity: 1, x:0, duration: 3}, '-=3')

let sceneDay = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "100%",
    triggerHook: 0,
})

    .setTween(timelineDay)
    .addTo(controller);

timelineNight
    .fromTo('.clouds-night', 3, {opacity: 0, y: -150}, {opacity: 1, y: 60, duration: 3})
    .fromTo('.mountains', 3, {y: -50}, {y: 25, duration: 3}, '-=3')
    .fromTo('.bg2', 2, {y: 0}, {y: -300, duration: 3}, '-=3')
    .fromTo('.night-title', 3, {opacity: 0}, {opacity: 1, duration: 3}, '-=3')

let sceneNight = new ScrollMagic.Scene({
    triggerElement: ".night",
    duration: "100%",
    triggerHook: 0.5,
})

    .setTween(timelineNight)
    .addTo(controller);
