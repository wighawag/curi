import {
  CompiledRouteArray,
  Params,
  Emitted,
  RouterOptions
} from "@curi/router";

import { HistoryOptions } from "@hickory/in-memory";

export interface PageDescriptor {
  name: string;
  params?: Params;
}

export interface FallbackDescriptor {
  filename: string;
  pathname: string;
}

export type GetRouterOptions = () => RouterOptions;

export interface StaticOutput {
  render: (emitted: Emitted) => any;
  insert: (markup: any, emitted?: Emitted) => string;
  dir: string;
  redirects?: boolean;
}

export interface StaticRouter {
  routes: CompiledRouteArray;
  getRouterOptions?: GetRouterOptions;
}

export interface StaticConfiguration {
  pages: Array<PageDescriptor>;
  fallback?: FallbackDescriptor;
  router: StaticRouter;
  output: StaticOutput;
  history?: HistoryOptions;
}

export interface Result {
  pathname: string;
  success: boolean;
  error?: Error;
}

export interface PathnamesConfiguration {
  routes: CompiledRouteArray;
  pages: Array<PageDescriptor>;
  routerOptions?: RouterOptions;
}