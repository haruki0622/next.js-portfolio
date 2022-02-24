import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'portfolio2365',
  apiKey: process.env.API_KEY,
});