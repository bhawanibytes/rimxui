import { ROUTES } from "./routes";

// This is used to get all the routes defined in ROUTES object.
type RouteValues = string & (typeof ROUTES)[keyof typeof ROUTES];

/**
 * This is used for finding parameters in route string using template literals.
 *
 * It is used to extract parameters by matching the route string by looking for `:`
 * and when it finds `:` it will infer the parameter using `infer Param` and the previous
 * characters are matched using `${string}` literal. Once `:` is found and the parameter
 * is inferred then it captures remaining route using `infer Rest` and then recursively
 * processes the remaining route string.
 *
 * Eg: Let say we have a route like: `showcase/component/:component`
 * and another route like: `user/:userId/post/:postId`.
 *
 * For `showcase/component/:component`
 *  1. It will match `${string}:${infer Param}/${infer Rest}`
 *     - `${string}` will match "showcase/component/"
 *     - `${infer Param}` will infer "component"
 *     - `${infer Rest}` will infer ""
 *  2. It will return "component"
 *
 * For `user/:userId/post/:postId`
 *  1. It will match `${string}:${infer Param}/${infer Rest}`
 *    - `${string}` will match "user/"
 *    - `${infer Param}` will infer "userId"
 *    - `${infer Rest}` will infer "post/:postId"
 *  2. It will return "userId"
 *  3. Then it will recursively process the remaining route string
 *    - `${string}:${infer Param}`
 *      - `${string}` will match "post/"
 *      - `${infer Param}` will infer "postId"
 *      - `${infer Rest}` will infer ""
 *    - It will return "postId"
 * So we can successfully extract parameters from both the routes and if the route do not contain
 * any parameters then it will fallback to `never`.
 */
type ExtractRouteParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? Param | ExtractRouteParams<`/${Rest}`>
    : T extends `${string}:${infer Param}`
      ? Param
      : never;

/**
 * Here we are creating an object based on the route parameters extracted using `ExtractRouteParams`.
 *
 * We first check if the route has parameters using `ExtractRouteParams<T> extends never`.
 * If it does not have any parameters then we return `never`.
 *
 * If it has parameters then we create an object with the parameters as keys and the values can be
 * string or number.
 */
type RouteParamsObject<T extends string> =
  ExtractRouteParams<T> extends never
    ? never
    : { [K in ExtractRouteParams<T>]: string | number };

/**
 * Now we need to define type for function definition, we want to ensure that static routes
 * do not ask for any parameters as an argument and dynamic route identifies the parameters
 * and ask for them as an argument.
 *
 * So we are checking if the route has parameters using `ExtractRouteParams<R> extends never`.
 * If it does not have any parameters then we return an empty tuple.
 *
 * If it has parameters then we return a single element tuple with `RouteParamsObject<R>`.
 */
type GetRouteParams<R extends RouteValues> =
  ExtractRouteParams<R> extends never
    ? [] // No params allowed if route has no parameters
    : [params: RouteParamsObject<R>]; // Params required if route has parameters

/**
 * This function is used to get the route with the parameters replaced by their values.
 *
 * For static routes: `getRoute(ROUTES.home)`
 * For dynamic routes: `getRoute(ROUTES.componentShowcase, { component: "button" })`
 *
 * We first check if the route has parameters using `GetRouteParams<R>`.
 * If it does not have any parameters then we return the route as is.
 *
 * If it has parameters then we replace the parameters in the route with the values provided in the
 * parameters object.
 */
export const getRoute = <R extends RouteValues>(
  route: R,
  ...params: GetRouteParams<R>
): string => {
  const [paramObj] = params;
  if (!paramObj) {
    return route;
  }

  return Object.entries(paramObj as Record<string, string | number>).reduce(
    (result, [param, value]) => result.replace(`:${param}`, String(value)),
    route as string,
  );
};
