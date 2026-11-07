/**
 * Base URL of the Convex Management API. Defaults to `https://api.convex.dev/v1`, or the `CONVEX_ENDPOINT` environment variable when set.
 */
export declare const endpoint: string | undefined;
/**
 * Bearer token used to authenticate against the Management API. This may be a team access token, a personal access token, or an OAuth token. May also be set with the `CONVEX_ACCESS_TOKEN` environment variable.
 */
export declare const token: string | undefined;
