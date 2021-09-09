const card1 = document.querySelector('#one');
const card2 = document.querySelector('#two');
const card3 = document.querySelector('#three');
const tl = gsap.timeline({
    repeat: 0,
    repeatDelay: 0.05,
    defaults: { duration: 0.75, ease: "power5.out" },
  });
  
tl.from(card1, {scale: 0.85}).to(card1, {scale: 0.88});
//tl.from(card1, {scale: 1.1}).to(card1, {scale: 1});

tl.from(card2, {scale: 0.85}).to(card2, {scale: 0.88});
//tl.from(card2, {scale: 1.1}).to(card2, {scale: 1});

tl.from(card3, {scale: 0.85}).to(card3, {scale: 0.88});
//tl.from(card3, {scale: 1.1}).to(card3, {scale: 1});


