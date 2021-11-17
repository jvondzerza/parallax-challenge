let controller = new ScrollMagic.Controller();
let timelineDay = gsap.timeline();
let timelineNight = gsap.timeline();

timelineDay
    .fromTo('.clouds-daytime', 3, {opacity: 0}, {opacity: 1, y: 300})
    .to('.city', 3, {y: 80}, '-=3')
    .fromTo('.bg1', 3, {y: -50}, {y: 0, duration: 3}, '-=3')
    .fromTo('.day-title', 3,{color: '#92b5ce'}, {x: -100, color: '#E6EBF3', opacity: 0.5}, '-=3')
    .fromTo('.text', 3, {opacity: 0}, {opacity: 1}, '-=3')


let sceneDay = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "100%",
    triggerHook: 0,
})

    .setTween(timelineDay)
    .addTo(controller);

timelineNight
    .fromTo('.clouds-night', 3, {opacity: 1, y: -50}, {opacity: 0.9, y: 100})
    .to('.mountains', 3, {y: 80}, '-=3')
    .fromTo('.bg2', 3, {y: 0}, {y: -50, duration: 3}, '-=1')
    .fromTo('.night-title', 3, {opacity: 0}, {opacity: 1}, '-=3')





let sceneNight = new ScrollMagic.Scene({
    triggerElement: ".night",
    duration: "100%",
    triggerHook: 0.5,
})

    .setTween(timelineNight)
    .addTo(controller);
