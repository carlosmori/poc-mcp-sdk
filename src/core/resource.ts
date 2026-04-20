// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { McpPocStainless } from '../client';

export abstract class APIResource {
  protected _client: McpPocStainless;

  constructor(client: McpPocStainless) {
    this._client = client;
  }
}
