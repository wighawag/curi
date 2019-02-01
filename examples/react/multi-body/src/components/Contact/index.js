import React from "react";
import { Link } from "@curi/react-dom";

export const Contact = () => {
  return <div>Contact Page.</div>;
};

export const ContactMenu = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link name="Home">Home</Link>
        </li>
        <li>
          <Link name="Method" params={{ method: "email" }}>
            Contact By Email
          </Link>
        </li>
        <li>
          <Link name="Method" params={{ method: "fax" }}>
            Contact By Fax
          </Link>
        </li>
      </ul>
    </nav>
  );
};
