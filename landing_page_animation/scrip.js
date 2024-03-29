// gsap.to(".img_container", {
//   ease: Expo.easeInOut,
//   width: "100%",
//   stagger: 2,
// });

// gsap.to(".text h1", {
//   ease: Expo.easeInOut,
//   stagger: 2,
//   top: 0,
// });

// gsap.to(".text h1", {
//   delay: 2,
//   ease: Expo.easeInOut,
//   stagger: 2,
//   top: "-100%",
// });

// now we want that the animation is continus inifinite

let tl = gsap.timeline({
  repeat: -1,
});

tl.to(
  ".img_container",
  {
    ease: Expo.easeInOut,
    width: "100%",
    stagger: 2,
  },
  "krish"
)
  .to(
    ".text h1",
    {
      ease: Expo.easeInOut,
      stagger: 2,
      top: 0,
    },
    "krish"
  )
  .to(
    ".text h1",
    {
      delay: 2,
      ease: Expo.easeInOut,
      stagger: 2,
      top: "-100%",
    },
    "krish"
  );
