const guides = [
  {
    name: 'Installation',
    slug: 'installation',
    description: 'Learn how to install Curi',
    type: 'basic'
  },
  {
    name: 'Getting Started',
    slug: 'getting-started',
    description: 'Learn the basic concepts that you\'ll need to know to setup your project',
    type: 'basic'
  },
  {
    name: 'All About Routes',
    slug: 'routes',
    description: 'Learn about Curi routes and their properties',
    type: 'basic'
  },
  {
    name: 'Rendering with Responses',
    slug: 'responses',
    description: 'Learn how to render your project using a response object',
    type: 'basic'
  },
  {
    name: 'Using Addons',
    slug: 'addons',
    description: 'Learn how to use addons to interact with your routes in your project',
    type: 'advanced'
  },
  {
    name: 'Using Side Effects',
    slug: 'side-effects',
    description: 'Learn how to use side effect functions to trigger behavior after navigation',
    type: 'advanced'
  },
  {
    name: 'Response Caching',
    slug: 'response-caching',
    description: 'Learn how to cache responses to prevent recreating duplicate responses',
    type: 'advanced'
  },
  {
    name: 'Code Splitting with the Preload Property',
    slug: 'code-splitting',
    description: 'Learn how to code split your project using Webpack',
    type: 'advanced'
  },
  {
    name: 'The Load Property',
    slug: 'load',
    description: 'Learn how to use a route\'s load function to modify responses',
    type: 'advanced'
  },
  {
    name: 'React Basics',
    slug: 'react',
    description: 'Learn the basics of how to use Curi with a React application',
    type: 'advanced'
  }
];

export const groupedGuides = guides.reduce((acc, curr) => {
  if (!acc[curr.type]) {
    acc[curr.type] = [curr];
  } else {
    acc[curr.type].push(curr);
  }
  return acc;
}, {});


export const byName = guides.reduce((acc, curr) => {
  acc[curr.slug] = curr;
  return acc;
}, {});

export default guides;
