import React from "react";

const ArrowUp = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div 
      className="scroll-to-top" 
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        zIndex: "999",
        backgroundColor: "#000",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.3s",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="#fff"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8.354 3.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L8.5 4.707V14.5a.5.5 0 0 1-1 0V4.707L3.646 8.354a.5.5 0 0 1-.708-.708l4-4z"
        />
      </svg>
    </div>
  );
};

export default ArrowUp;
