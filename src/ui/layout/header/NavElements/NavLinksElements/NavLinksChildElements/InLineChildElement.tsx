import React, { ReactNode } from "react";

type InLineChildElementProps = {
  text: string;
  icons?: string;
  className?: string;
  children?: ReactNode;
};

export default function InLineChildElement(props: InLineChildElementProps) {
  return (
    <>
      <div className="menu-item">
        <a href="#" className="menu-link">
          <span className="menu-bullet">
            <span className="bullet bullet-dot"></span>
          </span>
          <span className="menu-title">{props.text}</span>
        </a>
      </div>
    </>
  );
}
