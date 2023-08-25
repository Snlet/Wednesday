gsap.from(".small_images_group1",{
    y:-20,
    duration:3,
    repeat:-1,
    yoyo:true,
})
gsap.from(".small_images_group2",{
    y:+20,
    duration:3,
    repeat:-1,
    yoyo:true,
})

var tl =gsap.timeline();

tl.from("#nav h1, #nav #nav-part2 ,#nav-part3",{
    y:-50,
    opacity:0,
    duration:0.4,
    stagger:0.2
})
tl.from("#center h1",{
    scale:1.3,
    opacity:0,
    duration:0.5,
})
tl.from("#center p",{
    scale:1,
    opacity:0,
    duration:0.4,
})
tl.from("#page1>img",{
    y:50,
    opacity:0,
    duration:0.2

})