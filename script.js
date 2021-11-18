let controller = new ScrollMagic.Controller();
let timelineDay = gsap.timeline();
let timelineEvening = gsap.timeline();
let timelineCloud = gsap.timeline({paused: false})

timelineDay

    .fromTo('.clouds-daytime', 3, {opacity: 0}, {opacity: 1, y: 300, duration: 3})
    .fromTo('.asset-credits', 0.2, {opacity: 1}, {opacity: 0, duration: 3}, '-=3')
    .to('.city', 3, {y: 80, duration: 3}, '-=3')
    .to('.sun', 3, {y: 400, x: -80, duration: 3, opacity: 0.1}, '-=3')
    .fromTo('.bg1', 3, {y: 0}, {y: -50, duration: 3}, '-=3')
    .fromTo('.day-title', 3,{color: '#92b5ce'}, {x: -100, color: '#E6EBF3', opacity: 0.5, duration: 3}, '-=3')
    .fromTo('.text', 3, {opacity: 0, y: 20}, {opacity: 1, y:0, duration: 3}, '-=3')

let sceneDay = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "100%",
    triggerHook: 0,
})

    .setTween(timelineDay)
    .addTo(controller);

timelineEvening
    .fromTo('.clouds-evening', 3, {opacity: 0, y: -150}, {opacity: 1, y: 60, duration: 3})
    .fromTo('.mountains', 3, {y: -50}, {y: 25, duration: 3}, '-=3')
    .fromTo('.bg2', 2, {y: 0}, {y: -300, duration: 3}, '-=3')
    .fromTo('.evening-title', 3, {opacity: 0}, {opacity: 1, duration: 3}, '-=3')
    .to('.balloon', 3, {y: -750, x:300, duration: 3}, '-=3')
    .to('.balloon2', 3, {y: -250, x:400, duration: 3}, '-=3')

let sceneEvening = new ScrollMagic.Scene({
    triggerElement: ".evening",
    duration: "100%",
    triggerHook: 0.5,
})

    .setTween(timelineEvening)
    .addTo(controller);


let width = 1171,
    speed = 60,
    duration = width / speed,
    endPosition = width - (speed / 60);

timelineCloud.to('.content', duration, {css:{backgroundPosition:endPosition + "px 0"}, repeat:-1, ease:Linear.easeNone});

