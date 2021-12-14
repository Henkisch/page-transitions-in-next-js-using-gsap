import gsap from "gsap";

const PageExit = (node) => {
  const tl = gsap.timeline();

  tl.to(node, {
    duration: .5,
    delay: .125,
    css: {
      opacity: 0,
      y: -300
    },
    ease: 'Power4.easeIn',
  });
}

export default PageExit;