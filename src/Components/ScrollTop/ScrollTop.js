import React from "react";

import "./ScrollTop.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <Button className="scroll-to-top" variant="dark" onClick={scrollToTop}>
      ↑
    </Button>
  );
};

export default ScrollToTop;
