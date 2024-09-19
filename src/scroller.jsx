import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "99",
            fontSize: "20px",
            border: "none",
            outline: "none",
            backgroundColor: "#ff0000",
            color: "white",
            cursor: "pointer",
            padding: "10px 15px",
            borderRadius: "10%",
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};
export default ScrollToTop;
