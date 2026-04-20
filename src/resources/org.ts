// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Org extends APIResource {
  /**
   * List supported regions
   */
  listRegions(
    params: OrgListRegionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrgListRegionsResponse> {
    const { 'x-api-key': xAPIKey } = params ?? {};
    return this._client.get('/v1/org/regions', {
      ...options,
      headers: buildHeaders([
        { ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type OrgListRegionsResponse = Array<OrgListRegionsResponse.OrgListRegionsResponseItem>;

export namespace OrgListRegionsResponse {
  export interface OrgListRegionsResponseItem {
    id: string;

    code: string;

    name: string;
  }
}

export interface OrgListRegionsParams {
  'x-api-key'?: string;
}

export declare namespace Org {
  export {
    type OrgListRegionsResponse as OrgListRegionsResponse,
    type OrgListRegionsParams as OrgListRegionsParams,
  };
}
