import createURIs from './utils/createURIs';
import DEFAULT_ADDONS from './addons/defaults';
import Response from './response';

function createConfig(history, routes, addons = DEFAULT_ADDONS) {
  let uris = [];
  const globals = {};
  const subscribers = [];

  let currentUpdate;
  let lastUpdate;

  const setup = routes => {
    const registerFunctions = [];
    for (let key in globals) {
      delete globals[key];
    }

    addons.forEach(addonFactory => {
      const addon = addonFactory();
      globals[addon.name] = addon.get;
      registerFunctions.push(addon);
    });

    uris = createURIs(routes, registerFunctions, {});
  };

  const respond = () => {
    let { pathname, key } = history.location;
    // hash history quick fix
    if (key == null) {
      key = Math.random().toString(36).slice(2, 8);
      history.location.key = key;
    }
    currentUpdate = key;
    const resp = new Response(history.location);
    uris.some(uri => uri.match(pathname, resp));
    return resp;
  };

  const runURILoadFunctions = resp => {
    if (!resp.uri) {
      resp.setStatus(404);
      return Promise.resolve(resp);
    }
    const { preload, load } = resp.uri;
    return Promise.all([
      preload ? preload() : null,
      load ? load(resp) : null
    ]).then(
      () => {
        resp.call();
        return resp;
      },
      err => {
        // not sure what to do here yet
        return Promise.reject(err);
      }
    );
  };

  const prepareResponse = () => {
    const response = respond();
    return runURILoadFunctions(response).then(resp => {
      // save this for quick ref
      lastUpdate = resp.asObject();
      return lastUpdate;
    });
  };

  const subscribe = fn => {
    if (typeof fn !== 'function') {
      throw new Error('The argument passed to subscribe must be a function');
    }

    if (lastUpdate) {
      fn(lastUpdate);
    }

    const newLength = subscribers.push(fn);
    return () => {
      subscribers[newLength - 1] = null;
    };
  };

  const emit = response => {
    // don't emit old responses
    // TODO: need to figure out a better solution for this because hash history
    // does not add a location.key (because it can have no state).
    if (response.location.key !== currentUpdate) {
      return;
    }
    subscribers.forEach(fn => {
      if (fn != null) {
        fn(response);
      }
    });
  };

  const ready = () =>
    (lastUpdate ? Promise.resolve(lastUpdate) : prepareResponse());

  // now that everything is defined, actually do the setup
  setup(routes);
  const unlisten = history.listen(() => {
    prepareResponse().then(resp => {
      emit(resp);
    });
  });

  return {
    ready,
    refresh: setup,
    subscribe,
    addons: globals,
    history
  };
}

export default createConfig;