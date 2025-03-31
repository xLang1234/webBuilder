import { motion } from 'framer-motion';
import { fadeInUp, fadeInFromLeft, fadeInFromRight, getStaggeredFadeIn } from './animationVariants';

export const FadeInUp = ({ children, delay = 0, ...props }) => (
  <motion.div
    {...fadeInUp}
    transition={{ ...fadeInUp.transition, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const FadeInLeft = ({ children, delay = 0, ...props }) => (
  <motion.div
    {...fadeInFromLeft}
    transition={{ ...fadeInFromLeft.transition, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const FadeInRight = ({ children, delay = 0, ...props }) => (
  <motion.div
    {...fadeInFromRight}
    transition={{ ...fadeInFromRight.transition, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggeredItem = ({ children, index = 0, direction = 'up', ...props }) => (
  <motion.div
    {...getStaggeredFadeIn(index, direction)}
    {...props}
  >
    {children}
  </motion.div>
);
