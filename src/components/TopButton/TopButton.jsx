import React from "react";
import Styles from "./TopButton.module.scss";

const { topButton } = Styles;

function TopButton() {
  return (
    <button
      className={topButton}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      Top
    </button>
  );
}

export default TopButton;
