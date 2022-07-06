import React, { ReactNode } from "react";

type NavlinksProps = {
  text: string;
  className?: string;
  "data-kt-menu-trigger"?: string;
  "data-kt-menu-placement"?: string;
  children?: ReactNode;
};
export default function NavLinks(props: NavlinksProps) {
  return (
    <>
      <div className="menu-item me-lg-1">
        <a className="menu-link py-3 " href="/">
          <span className="menu-title">{props.text}</span>
        </a>
      </div>
    </>
  );
}
