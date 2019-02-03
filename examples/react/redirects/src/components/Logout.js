import React from "react";

import fakeAuth from "../fakeAuth";

const Logout = ({ router }) => (
  <div>
    <button
      type="button"
      onClick={e => {
        fakeAuth.logout();
        router.navigate({ name: "Home", method: "REPLACE" });
      }}
    >
      Logout
    </button>
  </div>
);

export default Logout;
