import React from "react";
import { ReactNode } from "react";

type NavlinksChildProps = {
  text: string;
  className?: string;
  children?: ReactNode;
};
export default function (props: NavlinksChildProps) {
  return (
    <div className="menu-item me-lg-1">
      <a className="menu-link py-3" href="#">
        <span className="menu-bullet">
          <span className="bullet bullet-dot"></span>
        </span>
        <span className="menu-title">{props.text}</span>
      </a>
    </div>
  );
}
