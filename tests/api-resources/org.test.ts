// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import McpPocStainless from 'mcp_poc_stainless';

const client = new McpPocStainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource org', () => {
  // Mock server tests are disabled
  test.skip('listRegions', async () => {
    const responsePromise = client.org.listRegions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listRegions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.org.listRegions({ 'x-api-key': 'x-api-key' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(McpPocStainless.NotFoundError);
  });
});
