import React from "react";
import { useActive, Link } from "@curi/react-dom";

const ActiveLink = ({ name, params, partial, className = "", ...rest }) => {
  const active = useActive({ name, params, partial });
  return (
    <Link
      name={name}
      params={params}
      {...rest}
      className={active ? `${className} active` : className}
    />
  );
};

const NavLinks = () => (
  <nav>
    <ul>
      <li>
        <ActiveLink name="Home">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink name="Contact" partial={true}>
          Contact
        </ActiveLink>
        <ul>
          <li>
            <ActiveLink name="Method" params={{ method: "phone" }}>
              By Phone
            </ActiveLink>
          </li>
          <li>
            <ActiveLink name="Method" params={{ method: "email" }}>
              By Email
            </ActiveLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);

export default NavLinks;
