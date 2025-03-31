export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const fadeInFromLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export const fadeInFromRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export const getStaggeredFadeIn = (index, direction = 'up') => {
  const baseProps = {
    initial: { 
      opacity: 0, 
      y: direction === 'up' ? 20 : 0,
      x: direction === 'left' ? -20 : (direction === 'right' ? 20 : 0)
    },
    whileInView: { 
      opacity: 1, 
      y: 0,
      x: 0
    },
    viewport: { once: true },
    transition: { delay: index * 0.1, duration: 0.5 }
  };
  
  return baseProps;
};
