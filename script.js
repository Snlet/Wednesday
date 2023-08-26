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

 var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3 h2",
        scroller:"body",
        scrub:2,
        markers:false,
        end:"top 82%",
    }

 })

 tl2.from("#page3 h2",{
    y:50,
    opacity:0,
    duration:0.3,
    // scrollTrigger:{
    //     trigger:"#page3 h2",
    //     scroller:"body",
    //     scrub:2,
    //     markers:true,
    //     end:"top 82%",
    // }
 })
 tl2.from("#page3 .page3-holders",{
    y:100,
    opacity:0,
    duration:0.3,
    stagger:0.3,
 })

 tl.from("#page4 h2 , #page4 p",{
    y:100,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        trigger:"#page4 h2 , #page4 p",
        scroller:"body",
        scrub:true,
        markers:false,
        end:"top 60%",
        start:"top 120%",
    }

 })
 tl.from("#page4 #page4-holder",{
    y:100,
    opacity:0,
    duration:0.3,
    scale:0.5,
    scrollTrigger:{
        trigger:"#page4 h2 , #page4 p",
        scroller:"body",
        scrub:3,
        markers:false,
        end:"top 30%",
        start:"top 100%",
      
    }
 })

 tl.from("#banner1",{
    y:100,
    duration:0.5,
    scale:1.5,
    scrollTrigger:{
        trigger:"#banner1",
        scroller:"body",
        scrub:2,
        markers:false,
        end:"top 85%",
        start:"top 100%"
    }
 })
 tl.from("#banner2",{
    y:50,
    duration:0.5,
    
    scrollTrigger:{
        trigger:"#banner2",
        scroller:"body",
        scrub:2,
        markers:true,
        end:"top 85%",
        start:"top 100%"
    }
 })

