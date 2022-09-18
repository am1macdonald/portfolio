import React from "react";

function TopButton() {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      Top
    </button>
  );
}

export default TopButton;
