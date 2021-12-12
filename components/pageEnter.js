import gsap from "gsap";

const pageEnter = (node) => {
  const tl = gsap.timeline();

  tl.to(node, 0, {
    css: {
      opacity: 0,
      y: 100
    }
  });

  tl.to(node, .5, {
    delay: .125,
    css: {
      opacity: 1,
      y: 0
    },
    ease: 'Power4.easeInOut',
  });
}

export default pageEnter;