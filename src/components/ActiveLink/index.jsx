import React, { cloneElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const ActiveLink = ({ children, activeClassName, ...rest }) => {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassName : "";

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
};
