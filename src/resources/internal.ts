// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Internal extends APIResource {
  /**
   * Create a new API key for a user (Worker -> API only)
   */
  createAPIKey(
    body: InternalCreateAPIKeyParams,
    options?: RequestOptions,
  ): APIPromise<InternalCreateAPIKeyResponse> {
    return this._client.post('/v1/internal/create-api-key', { body, ...options });
  }
}

export interface InternalCreateAPIKeyResponse {
  /**
   * API key en claro. Se muestra una sola vez.
   */
  api_key: string;

  user_email: string;
}

export interface InternalCreateAPIKeyParams {
  email: string;
}

export declare namespace Internal {
  export {
    type InternalCreateAPIKeyResponse as InternalCreateAPIKeyResponse,
    type InternalCreateAPIKeyParams as InternalCreateAPIKeyParams,
  };
}
