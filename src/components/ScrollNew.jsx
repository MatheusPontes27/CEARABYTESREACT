import React from 'react';
import useScrollReveal from '../hooks/useScrollRevealhook';

const Scroll = ({ children, y, start, end }) => {
  const ref = useScrollReveal({ y, start, end });

  return <div ref={ref}>{children}</div>;
};

export default Scroll;