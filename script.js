var tl = gsap.timeline()

tl.from("#nav",{
    opacity:0,
    duration:1.5,
    // delay:0.5
})


tl.from("#nav h1, .items li ,#nav h3",{
    y:-80,
    // delay:0.5,
    duration : 1.5,
    stagger:0.5,
    opacity:0
})

tl.from("#left h1",{
    x:-400,
    // duration:2,
    stagger:1,
    opacity:0
})

tl.from("#right img",{
    scale:0,
    opacity:0,
    // duration:2
})

gsap.from("#page2 .box",{
    scale:0,
    duration:1,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        // scrub:2,
        end:"top 90%"
    
    }
})