import gsap from "gsap";

const PageEnter = (node) => {
  const tl = gsap.timeline();

  tl.from(node, {
    duration: .5,
    delay: .125,
    css: {
      opacity: 0,
      y: 300
    },
    ease: 'Power4.easeOut',
  });
}

export default PageEnter;