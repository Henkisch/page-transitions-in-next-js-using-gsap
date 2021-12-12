import gsap from "gsap";

const pageExit = (node) => {
  const tl = gsap.timeline();

  tl.to(node, 0, {
    css: {
      opacity: 1,
      y: 0
    }
  });

  tl.to(node, .5, {
    css: {
      opacity: 0,
      y: -300
    },
    ease: 'Power4.easeInOut',
  });
}

export default pageExit;