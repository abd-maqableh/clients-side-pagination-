import React from "react";
import css from "./Loader.module.scss";
const Loader = () => {
  return (
    <div className={css.spinnerContainer}>
      <div className={css.loadingSpinner}></div>
    </div>
  );
};

export default Loader;
