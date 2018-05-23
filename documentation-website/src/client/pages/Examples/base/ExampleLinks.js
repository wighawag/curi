import React from "react";

import EXAMPLE_API from "../../../constants/examples";
import PrefetchActiveLink from "../../../components/PrefetchActiveLink";

const Category = ({ name, examples }) => {
  return (
    <ul className="link-list">
      {examples.map(e => (
        <li key={`${e.category}/${e.slug}`} className="solo">
          <PrefetchActiveLink
            to="Example"
            params={{ category: e.category, slug: e.slug }}
          >
            {e.name}
          </PrefetchActiveLink>
        </li>
      ))}
    </ul>
  );
};

export default () => {
  const examples = EXAMPLE_API.all();
  const categories = Object.keys(examples);
  return (
    <div>
      {categories.map(key => (
        <div key={key}>
          <h3>{key}</h3>
          <Category name={key} examples={examples[key]} />
        </div>
      ))}
    </div>
  );
};