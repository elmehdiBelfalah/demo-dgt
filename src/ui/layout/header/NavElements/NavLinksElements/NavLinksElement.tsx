import path from "node:path/win32";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type NavlinksProps = {
  text: string;
  icons?: string;
  className?: string;
  children?: ReactNode;
};

export default function NavLinksElement(props: NavlinksProps) {
  return (
    <>
      <div
        className="menu-item menu-lg-down-accordion me-lg-1"
        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
        data-kt-menu-placement="right-start"
      >
        <span className="menu-link py-3">
          <span className="menu-icon">
            <i className={props.icons}></i>
          </span>
          <span className="menu-title">{props.text}</span>
          <span className="menu-arrow"></span>
        </span>
      </div>
    </>
  );
}
