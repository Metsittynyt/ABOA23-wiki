// Fade in animation
const observerFadeIn = new IntersectionObserver(
    (items) => {
      items.forEach((i) => {
        if (i.isIntersecting) {
          i.target.classList.add("fade-in");
        } else {
          i.target.classList.remove("fade-in");
        }
      });
    },
    {
      threshold: 1,
    }
  );
  
  const fadeInItems = document.querySelectorAll(".to-fade-in");
  fadeInItems.forEach((i) => {
    observerFadeIn.observe(i);
  });
  
  const observerFadeInFast = new IntersectionObserver(
    (items) => {
      items.forEach((i) => {
        if (i.isIntersecting) {
          i.target.classList.add("fade-in");
        } else {
          i.target.classList.remove("fade-in");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  
  const fadeInFastItems = document.querySelectorAll(".to-fade-in-fast");
  fadeInFastItems.forEach((i) => {
    observerFadeInFast.observe(i);
  });
  