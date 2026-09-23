import React from 'react';
import { motion } from 'framer-motion';

export const BlurText = ({
  text = '',
  delay = 150,
  animateBy = 'words',
  direction = 'top',
  className = '',
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const getVariants = (index) => {
    const isTop = direction === 'top';
    return {
      hidden: {
        filter: 'blur(10px)',
        opacity: 0,
        transform: `translate3d(0, ${isTop ? '-20px' : '20px'}, 0)`
      },
      visible: {
        filter: 'blur(0px)',
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        transition: {
          duration: 0.5,
          delay: (index * delay) / 1000
        }
      }
    };
  };

  return (
    <p className={`flex flex-wrap ${className}`} style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={getVariants(index)}
          style={{ display: 'inline-block', marginRight: animateBy === 'words' ? '0.3em' : '0' }}
        >
          {element === ' ' ? '\u00A0' : element}
        </motion.span>
      ))}
    </p>
  );
};
