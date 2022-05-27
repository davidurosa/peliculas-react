import React from "react";
import { SpinnerDiamond  } from "spinners-react";
import style from "./Cargador.module.css";
const Cagador = () => {
  return (
    <div className={style.spinner}>
      <SpinnerDiamond size={60} thickness={100} speed={97} color="rgba(57, 166, 172, 1)" secondaryColor="rgba(57, 62, 172, 0.98)" />
    </div>
  );
};

export default Cagador;
