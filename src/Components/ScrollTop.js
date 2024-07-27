import React from 'react';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
  };

  return (
    <Button
      className="position-fixed bottom-0 end-0 m-3"
      variant="dark"
      onClick={scrollToTop}
      style={{
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        boxShadow: '#adb5bd9e 0px 4px 4px 0px;'
        
      }}
    >
      ↑
    </Button>
  );
};

export default ScrollToTop;
