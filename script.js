var tl = gsap.timeline();

tl.from(".navbar h2 , .navbar button , .nav-part2 h4" , {
    y:-30,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.2,
    ease: "back.out(1.7)"
})

tl.from(".part1 h2 , .part1 h1" , {
    x:-50,
    opacity:0,
    duration:0.5,
    stagger:0.2,
    ease: "back.out(1.7)"

})
tl.from(".part1 button" , {
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.2,
    ease: "back.out(1.7)"

})
tl.from(".part2 img" , {
    x:100,
    opacity:0,
    duration:0.5,
    stagger:0.2,
    ease: "back.out(1.7)"

})

var tl2 = gsap.timeline()

tl2.from(".services .icons" , {
    x:-100,
    opacity:0,
    duration:1.4,
    scrollTrigger:{
        trigger:".services",
        scroller:"body",
        scrub:2,
        end:"top 30%"
    },
    stagger:0.3,
    ease: "back.out(1.7)"

})
tl2.from(".sel" , {
    y:40,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:".sel",
        scroller:"body",
        scrub:2,
        end:"top 30%"
    },
    ease: "back.out(1.7)"

})

tl2.from(".card-frame.left1" , {
    x:-200,
    opacity:0,
    ease: "back.out(1.7)",
    scrollTrigger:{
        trigger:".card-part1",
        scroller:"body",
        scrub:2,
        end:"top 30%"
    }
}, "anim")
tl2.from(".card-frame.center1" , {
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".card-part1",
        scroller:"body",
        scrub:2,
        end:"top 30%"
    },
    ease: "back.out(1.7)"

})
tl2.from(".card-frame.right1" , {
    x:200,
    opacity:0,
    scrollTrigger:{
        trigger:".card-part1",
        scroller:"body",
        scrub:2,
        end:"top 30%"
    },
    ease: "back.out(1.7)"

},"anim")






tl2.from(".card-frame.left2" , {
    x:200,
    opacity:0,
    scrollTrigger:{
        trigger:".card-part2",
        scroller:"body",
        scrub:2,
        end:"top 30%"
    },
    ease: "back.out(1.7)"

}, "anim2")
tl2.from(".card-frame.center2" , {
    y:-100,
    opacity:0,
    scrollTrigger:{
        trigger:".card-part2",
        scroller:"body",
        scrub:2,
        end:"top 30%"
    },
    ease: "back.out(1.7)"

})
tl2.from(".card-frame.right2" , {
    x:-200,
    opacity:0,
    scrollTrigger:{
        trigger:".card-part2",
        scroller:"body",
        scrub:2,
        end:"top 30%"
    },
    ease: "back.out(1.7)"

},"anim2")

tl2.from(".c-img h1 , .c-img button" , {
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".ques",
        scroller:"body",
        scrub:2,
        end:"top 30%",
        start:"top 70%"
    },
    ease: "back.out(1.7)"

})

tl2.from(".about h1 , .about h3" , {
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".about",
        scroller:"body",
        scrub:2,
        end:"top 30%",
        start:"top 70%"
    },
    ease: "back.out(1.7)"

})
tl2.from(".logo_name , .box , .input-box , copyright_text , policy_terms" , {
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:"footer",
        scroller:"body",
        scrub:2,
        end:"top 30%",
        start:"top 70%"
    },
    ease: "back.out(1.7)",
    stagger:0.2

})




var cursor = document.querySelector("#cursor")

window.addEventListener("mousemove" , function(pts){
    gsap.to(cursor,{
       x:pts.x,
       y:pts.y,
    ease: "back.out(3.7)"
    })
})


