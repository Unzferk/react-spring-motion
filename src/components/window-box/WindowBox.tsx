import React from "react";
import style from "./styles.module.css";

export interface IWindowBox {
  with: string;
  height: string;
}

const WindowBox: React.FC<IWindowBox> = (props) => {
  return (
    <div
      className={style.cont}
      style={{ width: props.with, height: props.height, borderRadius: 24 }}
    >
      <div className={style.contheader}>X</div>
      <div className={style.contbody}></div>
    </div>
  );
};

export default WindowBox;
