import React from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  className?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button className={props.className ? props.className : "btn-primary"}>
      {props.text}
    </button>
  );
};

export { Button };
