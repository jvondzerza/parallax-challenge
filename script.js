let controller = new ScrollMagic.Controller();
let timelineNight = gsap.timeline();
let timelineSunrise = gsap.timeline();
let timelineCloud = gsap.timeline({paused: false});
let timelineCloud2 = gsap.timeline({paused: false});
let timelineCloud3 = gsap.timeline({paused: false});
let timelineWing = gsap.timeline({paused: false});

let width = 1200,
    speed = 5,
    duration = width / speed,
    endPosition = width - (speed / 60);

timelineCloud
    .to('.night', duration, {css:{backgroundPosition:endPosition + "px 0"}, repeat:-1, ease:Linear.easeNone});

timelineNight
    .fromTo('.clouds-night', 3, {opacity: 0}, {opacity: 1.1, y: 300, duration: 3})
    .fromTo('.asset-credits', 0.2, {opacity: 1}, {opacity: 0}, '-=3')
    .to('.city', 3, {y: 150}, '-=3')
    .to('.moon', 3, {y: 400, x: -80, opacity: 0.1}, '-=3')
    .fromTo('.bg1', 3, {y: 0}, {y: -50}, '-=3')
    .fromTo('.night-title', 3,{color: '#92b5ce'}, {color: '#E6EBF3', opacity: 0.5}, '-=3')
    .fromTo('.text', 3, {opacity: 0, y: 20}, {opacity: 1, y:0}, '-=3')

let sceneNight = new ScrollMagic.Scene({
    triggerElement: ".night",
    duration: "100%",
    triggerHook: 0,
})

    .setTween(timelineNight)
    .addTo(controller);

timelineWing
    .to('.wing', 60, {x: -2100, ease:Linear.easeNone, repeat: -1});

let width2 = 1171,
    speed2 = 60,
    duration2 = width2 / speed2,
    endPosition2 = width2 - (speed2 / 60);

timelineCloud2.to('.content', duration2, {css:{backgroundPosition:endPosition2 + "px 0"}, repeat:-1, ease:Linear.easeNone});

timelineSunrise
    .fromTo('.clouds-sunrise', 3, {opacity: 0, y: -150}, {opacity: 1, y: 60, duration: 3})
    .fromTo('.mountains', 3, {y: -50}, {y: 25}, '-=3')
    .fromTo('.bg2', 3, {y: 0}, {y: -300}, '-=3')
    .fromTo('.sunrise-title', 3, {opacity: 0, scale: 0.5}, {opacity: 1, scale: 1}, '-=3')
    .fromTo('.sun', 3, {y: 100}, {y:20}, '-=3')
    .to('.balloon', 3, {y: -750, x:300}, '-=3')
    .to('.balloon2', 3, {y: -250, x:400}, '-=3')

let sceneSunrise = new ScrollMagic.Scene({
    triggerElement: ".sunrise",
    duration: "100%",
    triggerHook: 0.5,
})

    .setTween(timelineSunrise)
    .addTo(controller);

timelineCloud3
    .to('.sunrise', duration, {css:{backgroundPosition:endPosition + "px 0"}, repeat:-1, ease:Linear.easeNone});