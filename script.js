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

tl.from("#nav h1, #nav #nav-part2 ,#nav-part3,#nav i",{
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

var menu = document.querySelector("#nav #menu")

menu.addEventListener("click",function(){
    console.log("i am clicked")
    alert("hello I am clicked")
})

tl.from("#page2 h2,#page2 p",{
   y:80,
   duration:3,
   opacity:0, 
   scrollTrigger:{
    trigger:"#page2 h2,#page2 p,#page2",
    scroller:"body",
    markers:false,
    start:"top 103%",
    end:"top 99%",
    scrub:4,
   }
})
tl.from("#page2 #elem-holder",{
    y:80,
    duration:3,
    opacity:0, 
    scale:0.6,
    scrollTrigger:{
     trigger:"#page2 h2,#page2 p,#page2 #elem-holder",
     scroller:"body",
     markers:false,
     start:"top 75%",
     end:"top 55%",
     scrub:4,
    }
 })

 tl.from("#page2 #speed-holder",{
    y:25,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page2 #speed-holder",
        scroller:"body",
        scrub:true,
        markers:false,

        start:"top 90%",
        end:"top 70%",

    }
 })
 gsap.from("#page2 #elem-holder",{
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.4,
 })
