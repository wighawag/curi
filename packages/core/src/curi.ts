import registerRoutes from './utils/registerRoutes';
import pathnameAddon from './addons/pathname';
import createResponse from './response';
import createRoute from './route';

import { History, HickoryLocation, PendingNavigation, Action } from '@hickory/root';
import { PathFunctionOptions } from 'path-to-regexp';
import { RouteDescriptor, InternalRoute } from './route';
import { Response } from './response';
import {
  Addon,
  Addons,
  SideEffect,
  ResponseHandler,
  RemoveResponseHandler,
  Cache
} from './interface';

export interface ConfigOptions {
  addons?: Array<Addon>;
  sideEffects?: Array<SideEffect>;
  cache?: Cache;
  pathnameOptions?: PathFunctionOptions;
}

export interface ResponseHandlerOptions {
  once?: boolean;
}

export interface CuriConfig {
  refresh: (routeArray: Array<RouteDescriptor>) => void;
  respond: (fn: ResponseHandler, options?: ResponseHandlerOptions) => RemoveResponseHandler;
  addons: Addons;
  history: History;
}

function createConfig(
  history: History,
  routeArray: Array<RouteDescriptor>,
  options: ConfigOptions = {}
): CuriConfig {
  const {
    addons: userAddons = [],
    sideEffects = [],
    cache,
    pathnameOptions
  } = options as ConfigOptions;

  const beforeSideEffects: Array<ResponseHandler> = [];
  const afterSideEffects: Array<ResponseHandler> = [];
  sideEffects.forEach(se => {
    if (se.after) {
      afterSideEffects.push(se.fn);
    } else {
      beforeSideEffects.push(se.fn);
    }
  });

  let routes: Array<InternalRoute> = [];
  const registeredAddons: Addons = {};

  // add the pathname addon to the provided addons
  const allAddons = userAddons.concat(pathnameAddon(pathnameOptions));

  function setupRoutesAndAddons(routeArray: Array<RouteDescriptor>): void {
    routes = routeArray.map(createRoute);

    for (let key in registeredAddons) {
      delete registeredAddons[key];
    }

    allAddons.forEach(addon => {
      addon.reset();
      registeredAddons[addon.name] = addon.get;
      registerRoutes(routes, addon);
    });
  }

  function getResponse(location: HickoryLocation): Promise<Response> {
    if (cache) {
      const cachedResponse = cache.get(location);
      if (cachedResponse != null) {
        return Promise.resolve(cachedResponse);
      }
    }

    return createResponse(location, routes, registeredAddons).then(response => {
      if (cache) {
        cache.set(response);
      }
      return response;
    });
  }

  const responseHandlers: Array<ResponseHandler> = [];
  const oneTimers: Array<ResponseHandler> = [];
  let previous: [Response, Action] = [] as [Response, Action];

  function respond(fn: ResponseHandler, options?: ResponseHandlerOptions): RemoveResponseHandler {
    if (typeof fn !== 'function') {
      throw new Error('The first argument passed to "respond" must be a function');
    }

    const {
      once = false
    } = options || {};

    if (once) {
      if (previous.length) {
        fn.apply(null, previous);
      } else {
        oneTimers.push(fn);
      }
    } else {
      // Always call response handler immediately if a previous
      // response/action exists.
      if (previous.length) {
        fn.apply(null, previous);
      }

      const newLength = responseHandlers.push(fn);
      return () => {
        responseHandlers[newLength - 1] = null;
      };
    }
  }

  function emit(response: Response, action: Action): void {
    beforeSideEffects.forEach(fn => {
      fn(response, action);
    });

    responseHandlers.forEach(fn => {
      if (fn != null) {
        fn(response, action);
      }
    });
    // calling one time responseHandlers after regular responseHandlers
    // ensures that those are called prior to the one time fns
    while (oneTimers.length) {
      const fn = oneTimers.pop();
      fn(response, action);
    }

    afterSideEffects.forEach(fn => {
      fn(response, action);
    });
  }

  let activeResponse: PendingNavigation;
  
  function navigationHandler(pending: PendingNavigation): void {
    if (activeResponse) {
      activeResponse.cancel(pending.action);
      activeResponse.cancelled = true;
    }
    activeResponse = pending;

    getResponse(pending.location).then(response => {
      if (pending.cancelled) {
        return;
      }
      pending.finish();
      activeResponse = undefined;
      emit(response, pending.action);
      previous = [response, pending.action];

      if (response.redirectTo) {
        history.replace(response.redirectTo);
      }
      return response;
    });
  }

  // now that everything is defined, actually do the setup
  setupRoutesAndAddons(routeArray);
  history.respondWith(navigationHandler);

  return {
    addons: registeredAddons,
    history,
    respond,
    refresh: setupRoutesAndAddons
  };
}

export default createConfig;