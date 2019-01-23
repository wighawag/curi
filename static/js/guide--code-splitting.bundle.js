(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var o=n(0),a=n.n(o),l=n(26),r={title:"Code Splitting"};function i(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,r.title),a.a.createElement(l.c,null,a.a.createElement("p",null,"If you are bundling an application with a lot of routes, users of your application may be downloading a lot of unnecessary content for the initial page render. Using code splitting, you can reduce the initial download size for your application by splitting code that is conditionally loaded into a separate bundle that is only downloaded when it is needed."),a.a.createElement(l.e,null,"This guide assumes that you are using Webpack 2+ to bundle your application.")),a.a.createElement(l.g,{title:"An app without code splitting",id:"no-split"},a.a.createElement(l.c,null,a.a.createElement("p",null,"Let's start out by describing our application's routes without code splitting. We will import each route's component from the files where they are defined.")),a.a.createElement(l.b,null,"import Home from './components/Home';\nimport Contact from './components/Contact';\nimport ContactMethod from './components/ContactMethod';\n\nconst routes = prepareRoutes([\n  {\n    name: 'Home',\n    path: '',\n    response: () => {\n      return {\n        body: Home\n      };\n    }\n  },\n  {\n    name: 'Contact',\n    path: 'contact',\n    response: () => {\n      return {\n        body: Contact\n      };\n    },\n    children: [\n      {\n        name: 'Contact Method',\n        path: ':method',\n        response: () => {\n          return {\n            body: ContactMethod\n          };\n        }\n      }\n    ]\n  }\n]);")),a.a.createElement(l.g,{title:"import() in resolve",id:"import"},a.a.createElement(l.c,null,a.a.createElement("p",null,"Instead of having static imports, we will use the"," ",a.a.createElement(l.d,null,"import()")," function to import our modules. We will import our components by adding a property to a route's ",a.a.createElement(l.d,null,"resolve")," ","object. The property name for the function is how we will access the resolved data in the route's ",a.a.createElement(l.d,null,"response()")," function."),a.a.createElement("p",null,a.a.createElement(l.d,null,"resolve")," functions are called every time a route matches. However, ",a.a.createElement(l.d,null,"import()")," calls automatically re-use the results of a previous call, so we do not have to worry about extra network requests."),a.a.createElement("p",null,"Here we will name the ",a.a.createElement(l.d,null,"resolve")," function for importing a component ",a.a.createElement(l.d,null,"body"),", since it will be set as the response's"," ",a.a.createElement(l.d,null,"body")," property."),a.a.createElement("p",null,a.a.createElement(l.d,null,"resolve.body()")," should return a Promise;"," ",a.a.createElement(l.d,null,"import()"),", conveniently, returns a Promise. In our"," ",a.a.createElement(l.d,null,"response()")," function, instead of referencing values imported at the top of the file, we can reference the result of the"," ",a.a.createElement(l.d,null,"resolve.body()")," function using ",a.a.createElement(l.d,null,"resolved.body"),"."),a.a.createElement("p",null,a.a.createElement(l.d,null,"import()")," resolves with a module object. If the component is a default export (",a.a.createElement(l.d,null,"export default MyComponent"),"), we can access the component through the imported module object's"," ",a.a.createElement(l.d,null,"default")," property.")),a.a.createElement(l.b,null,"const routes = prepareRoutes([\n  {\n    name: 'Home',\n    path: '',\n    resolve: {\n      body: () => (\n        import('./components/Home')\n          .then(module => module.default)\n      ),\n    },\n    response: ({ resolved }) => {\n      return {\n        body: resolved.body\n      };\n    }\n  },\n  {\n    name: 'Contact',\n    path: 'contact',\n    resolve: {\n      body: () => (\n        import('./components/Contact')\n          .then(module => module.default)\n      ),\n    },\n    response: ({ resolved }) => {\n      return {\n        body: resolved.body\n      };\n    },\n    children: [\n      {\n        name: 'Contact Method',\n        path: ':method',\n        resolve: {\n          body: () => (\n            import('./components/ContactMethod')\n              .then(module => module.default)\n          )\n        },\n        response: ({ resolved }) => {\n          return {\n            body: resolved.body\n          };\n        }\n      }\n    ]\n  }\n]);")),a.a.createElement(l.g,{title:"Other Approaches",id:"other"},a.a.createElement("p",null,"The approaches taken here are not the only way to do code splitting. Another approach is to skip the ",a.a.createElement(l.d,null,"resolve")," method and do code splitting at other points in your application (e.g."," ",a.a.createElement("a",{href:"https://github.com/jamiebuilds/react-loadable"},a.a.createElement(l.d,null,"react-loadable")),")."),a.a.createElement("p",null,"Whatever path you decide to go, hopefully this has shown you that setting up code splitting with a ",a.a.createElement(l.d,null,"resolve")," function is fairly simple to do. If you are using Webpack and want to reduce your initial bundle size, ",a.a.createElement(l.d,null,"resolve")," functions are a good way to accomplish this.")))}}}]);