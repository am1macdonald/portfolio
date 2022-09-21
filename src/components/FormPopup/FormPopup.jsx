import React from "react";
import Styles from "./FormPopup.module.scss";

const { formPopup } = Styles;

function FormPopup({ closeForm }) {
  return (
    <div className={formPopup}>
      <div>
        <iframe
          title="google-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdrQ-CeWjoNAw4gcV4B-nN7QqIGnOpaYBjEsMlj_Nh06M4nEA/viewform?embedded=true"
          width="640"
          height="850"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
        <button onClick={closeForm}>Close Form</button>
      </div>
    </div>
  );
}

export default FormPopup;
