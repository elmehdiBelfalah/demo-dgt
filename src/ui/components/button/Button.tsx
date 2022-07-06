import { type } from "os";
import React from "react";
import { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
  text?: string;
  className?: string;
  type?: "submit" | "button";
  children?: ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={props.className ? props.className : "btn-primary"}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export { Button };
