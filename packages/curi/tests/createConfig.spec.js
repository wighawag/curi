import createConfig from '../src/createConfig';
import pathname from '../src/addons/pathname';
import uri from '../src/uri';
import path, { parentPath } from '../src/path';
import createMemoryHistory from 'history/createMemoryHistory';
import createHashHistory from 'history/createHashHistory';
import Response from '../src/response';

// The subscribe function is called when subscribing  so that the
// subscriber function is called with the original location. This has
// the downside that if we want to test navigation changes, we have to
// ignore the first call of the subscribed function. This does that for us.
function ignoreFirstCall(fn) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      return;
    }
    return fn(...arguments);
  };
}

describe('createConfig', () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  describe('constructor', () => {
    // these tests rely on the fact that the pathname generator
    // is a default addon
    it('registers uris', () => {
      const uris = [
        { name: 'Home', path: path('') },
        { name: 'About', path: path('about') },
        { name: 'Contact', path: path('contact') }
      ];
      const config = createConfig(history, uris);

      const names = ['Home', 'About', 'Contact'];
      names.forEach(n => {
        expect(config.addons.pathname(n)).toBeDefined();
      });
    });

    it('registers nested uris', () => {
      const uris = [
        { name: 'Home', path: path('') },
        { name: 'About', path: path('about') },
        {
          name: 'Contact',
          path: path('contact'),
          children: [
            { name: 'Email', path: path('email') },
            { name: 'Phone', path: path('phone') }
          ]
        }
      ];
      const config = createConfig(history, uris);
      const names = ['Email', 'Phone'];
      names.forEach(n => {
        expect(config.addons.pathname(n)).toBeDefined();
      });
    });

    it('makes addons available through return object', () => {
      const uris = [{ name: 'Home', path: path('') }];
      const createFakeAddon = () => ({
        name: 'fake',
        register: () => {},
        reset: () => {},
        get: () => {}
      });
      const config = createConfig(history, uris, [createFakeAddon]);
      expect(config.addons.fake).toBeDefined();
    });

    it('includes pathname addon by default', () => {
      const uris = [{ name: 'Home', path: path('') }];
      const config = createConfig(history, uris);
      expect(config.addons.pathname).toBeDefined();
    });

    it('registers all of routes with all of the addons', () => {
      // this might be a bit convoluted, but it ensures that the addons
      // are registered as expected
      const firstAddonCache = {};
      const secondAddonCache = {};
      const createFirstAddon = () => {
        return {
          register: (route, extra) => {
            firstAddonCache[route.name] = route.path.path;
          }
        };
      };

      const createSecondAddon = () => {
        return {
          register: (route, extra) => {
            secondAddonCache[
              route.name
            ] = `${extra ? extra : 'None'} + ${route.name}`;
            return route.name;
          }
        };
      };

      const routes = [
        {
          name: 'Grandparent',
          path: path('grandparent'),
          children: [
            {
              name: 'Parent',
              path: path('parent'),
              children: [{ name: 'Child', path: path('child') }]
            }
          ]
        },
        {
          name: 'Cousin',
          path: path('cousin')
        }
      ];

      const config = createConfig(history, routes, [
        createFirstAddon,
        createSecondAddon
      ]);
      const expected = {
        Grandparent: {
          first: 'grandparent',
          second: 'None + Grandparent'
        },
        Parent: {
          first: 'parent',
          second: 'Grandparent + Parent'
        },
        Child: {
          first: 'child',
          second: 'Parent + Child'
        },
        Cousin: {
          first: 'cousin',
          second: 'None + Cousin'
        }
      };
      const keys = ['Grandparent', 'Parent', 'Child', 'Cousin'];
      keys.forEach(key => {
        expect(firstAddonCache[key]).toBe(expected[key].first);
        expect(secondAddonCache[key]).toBe(expected[key].second);
      });
    });
  });

  describe('refresh', () => {
    const err = console.error;

    beforeEach(() => {
      console.error = jest.fn();
    });

    afterEach(() => {
      console.error = err;
    });

    it('resets and replaces registered uris', () => {
      const englishRoutes = [
        { name: 'Home', path: path('') },
        { name: 'About', path: path('about') },
        { name: 'Contact', path: path('contact') }
      ];
      const spanishRoutes = [
        { name: 'Casa', path: path('') },
        { name: 'Acerca De', path: path('acerca-de') },
        { name: 'Contacto', path: path('contacto') }
      ];

      const config = createConfig(history, englishRoutes);

      config.refresh(spanishRoutes);

      const englishNames = ['Home', 'About', 'Contact'];
      englishNames.forEach(n => {
        expect(config.addons.pathname(n)).toBeUndefined();
      });

      const spanishNames = ['Casa', 'Acerca De', 'Contacto'];
      spanishNames.forEach(n => {
        expect(config.addons.pathname(n)).toBeDefined();
      });
    });
  });

  describe('ready', () => {
    it('returns a Promise with an object generated by a Response', done => {
      const routes = [
        {
          name: 'Contact',
          path: parentPath('contact'),
          children: [
            { name: 'Email', path: path('email') },
            { name: 'Phone', path: path('phone') }
          ]
        }
      ];
      const history = createMemoryHistory({
        initialEntries: ['/contact/email']
      });
      const config = createConfig(history, routes);
      config.ready().then(arg => {
        const properties = [
          'location',
          'status',
          'body',
          'name',
          'partials',
          'params'
        ];
        expect(Object.keys(arg).length).toEqual(properties.length);
        properties.forEach(prop => {
          expect(arg.hasOwnProperty(prop)).toBe(true);
        });
        done();
      });
    });

    it('resolves once route that matches initial location has loaded', done => {
      let loaded = false;
      const routes = [
        {
          name: 'Home',
          path: path(''),
          load: () => {
            loaded = true;
            return Promise.resolve();
          }
        }
      ];

      const config = createConfig(history, routes);
      config.ready().then(() => {
        expect(loaded).toBe(true);
        done();
      });
    });

    it('uses the last response if calling ready after a response has been created', done => {
      const routes = [
        {
          name: 'Contact',
          path: parentPath('contact'),
          children: [
            { name: 'Email', path: path('email') },
            { name: 'Phone', path: path('phone') }
          ]
        }
      ];
      const history = createMemoryHistory({
        initialEntries: ['/contact/email']
      });
      const config = createConfig(history, routes);
      config.ready().then(readyOne => {
        config.ready().then(readyTwo => {
          expect(readyTwo).toBe(readyOne);
          done();
        });
      });
    });
  });

  // not an actual function, but grouping some response related tests here
  describe('response', () => {
    it('sets 404 if no routes match', done => {
      const routes = [
        {
          name: 'Contact',
          path: parentPath('contact'),
          children: [
            { name: 'Email', path: path('email') },
            { name: 'Phone', path: path('phone') }
          ]
        }
      ];
      const history = createMemoryHistory({ initialEntries: ['/other-page'] });
      const config = createConfig(history, routes);
      config.ready().then(resp => {
        expect(resp.status).toBe(404);
        done();
      });
    });

    it('handles route promises that are rejected', done => {
      const routes = [
        {
          name: 'Home',
          path: path(''),
          load: resp => {
            return Promise.reject('oh no');
          }
        }
      ];
      const config = createConfig(history, routes);

      // Jest 20 will add the ability to check that a promise resolves/rejects
      // for now, this just verifies that it rejects
      config
        .ready()
        .then(resp => {
          expect(true).toBe(false);
          done();
        })
        .catch(err => {
          expect(true).toBe(true);
          done();
        });
    });

    it('passes response to load function', done => {
      const spy = jest.fn(resp => {
        expect(resp).toBeInstanceOf(Response);
        expect(resp.params.anything).toBe('hello');
      });
      const CatchAll = {
        name: 'Catch All',
        path: path(':anything'),
        load: spy
      };
      const history = createMemoryHistory({ initialEntries: ['/hello'] });
      const config = createConfig(history, [CatchAll]);
      config.ready().then(() => {
        expect(spy.mock.calls.length).toBe(1);
        done();
      });
    });

    it("will have a key on the location even if it isn't natively supported", () => {
      const history = createHashHistory();
      const CatchAll = {
        name: 'Catch All',
        path: path(':anything')
      };
      expect(history.location.key).toBeUndefined();
      const config = createConfig(history, [CatchAll]);
      config.ready().then(resp => {
        expect(resp.location.key).toBeDefined();
      });
    });
  });

  describe('subscribe', () => {
    it('throws an error if a non-function is passed to subscribe', () => {
      const history = createMemoryHistory({
        initialEntries: ['/contact/phone']
      });
      const How = { name: 'How', path: path(':method') };
      const routes = [
        { name: 'Home', path: path('') },
        { name: 'About', path: path('about') },
        {
          name: 'Contact',
          path: path('contact'),
          children: [How]
        }
      ];

      const config = createConfig(history, routes);
      config.ready().then(() => {
        const badArgs = [null, undefined, 1, true, {}, []];
        badArgs.forEach(arg => {
          expect(() => {
            config.subscribe(arg);
          }).toThrow();
        });
      });
    });

    it('passes response for current location when it subscribes', done => {
      const history = createMemoryHistory({
        initialEntries: ['/contact/phone']
      });
      const How = { name: 'How', path: path(':method') };
      const routes = [
        { name: 'Home', path: path('') },
        { name: 'About', path: path('about') },
        {
          name: 'Contact',
          path: parentPath('contact'),
          children: [How]
        }
      ];
      const sub = jest.fn();
      const config = createConfig(history, routes);
      config.ready().then(() => {
        config.subscribe(sub);
        expect(sub.mock.calls.length).toBe(1);
        const arg = sub.mock.calls[0][0];
        expect(arg.name).toBe('How');
        expect(arg.partials[0]).toBe('Contact');
        done();
      });
    });

    it("does not pass current location's response if it has resolved yet", () => {
      const history = createMemoryHistory({
        initialEntries: ['/contact/phone']
      });
      const How = { name: 'How', path: path(':method') };
      const routes = [
        { name: 'Home', path: path('') },
        { name: 'About', path: path('about') },
        {
          name: 'Contact',
          path: parentPath('contact'),
          children: [How]
        }
      ];

      const config = createConfig(history, routes);
      const sub = jest.fn();
      config.subscribe(sub);
      expect(sub.mock.calls.length).toBe(0);
    });

    it('notifies subscribers of matching routes when location changes', done => {
      const How = { name: 'How', path: path(':method') };
      const routes = [
        { name: 'Home', path: path('') },
        { name: 'About', path: path('about') },
        { name: 'Contact', path: parentPath('contact'), children: [How] }
      ];

      const check = ignoreFirstCall(response => {
        expect(response.name).toBe('How');
        expect(response.partials[0]).toBe('Contact');
        expect(response.params.method).toBe('mail');
        done();
      });

      const config = createConfig(history, routes);
      config.ready().then(() => {
        config.subscribe(check);
        history.push('/contact/mail');
      });
    });

    it('notifies subscribers after promises have resolved', done => {
      let promiseResolved = false;
      const uris = [
        { name: 'Home', path: path('') },
        { name: 'About', path: path('about') },
        {
          name: 'Contact',
          path: parentPath('contact'),
          children: [
            {
              name: 'How',
              path: path(':method'),
              load: () => {
                promiseResolved = true;
                return Promise.resolve(promiseResolved);
              }
            }
          ]
        }
      ];

      const check = ignoreFirstCall(response => {
        expect(promiseResolved).toBe(true);
        done();
      });

      const config = createConfig(history, uris);
      config.ready().then(() => {
        config.subscribe(check);
        history.push('/contact/phone');
      });
    });

    it('only emits most recent update if another one occurs before emitting', done => {
      const uris = [
        { name: 'Home', path: path('') },
        { name: 'About', path: path('about') },
        {
          name: 'Contact',
          path: parentPath('contact'),
          children: [
            {
              name: 'How',
              path: path(':method'),
              preload: () => Promise.resolve()
            }
          ]
        }
      ];
      const check = ignoreFirstCall(response => {
        expect(response.params.method).toBe('mail');
        done();
      });

      const config = createConfig(history, uris);
      config.ready().then(() => {
        config.subscribe(check);
        history.push('/contact/phone');
        history.push('/contact/mail');
      });
    });

    it('returns a function to unsubscribe when called', done => {
      const config = createConfig(history, [{ name: 'Home', path: path('') }]);

      const sub1 = jest.fn();
      const sub2 = jest.fn();

      // wait for the first response to be generated to ensure that both
      // subscriber functions are called when subscribing
      config.ready().then(() => {
        const unsub1 = config.subscribe(sub1);
        const unsub2 = config.subscribe(sub2);

        expect(sub1.mock.calls.length).toBe(1);
        expect(sub2.mock.calls.length).toBe(1);
        unsub1();
        history.push({ pathname: '/next' });

        // need to wait for the subscribers to actually be called
        process.nextTick(() => {
          expect(sub1.mock.calls.length).toBe(1);
          expect(sub2.mock.calls.length).toBe(2);
          done();
        });
      });
    });
  });
});