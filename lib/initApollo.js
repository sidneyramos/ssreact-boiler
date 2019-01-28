import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'

// Replace this with your project's endpoint
// const GRAPHCMS_API = 'https://api-useast.graphcms.com/v1/cjiacyow100ob01eqwnghonw2/master'
// const GRAPHCMS_API = 'https://api-apeast.graphcms.com/v1/cjkhlvumk0w8a01gm7jo9kkgk/master'
// const GRAPHCMS_API = 'https://api-apeast.graphcms.com/v1/cjmk7nrnq0x0b019o1o3b3iol/master'
const GRAPHCMS_API = 'https://api-apeast.graphcms.com/v1/cjr7qwfjm01ft01f0xgmzl6it/master'
let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create (initialState) {
  return new ApolloClient({
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({ uri: GRAPHCMS_API }),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo (initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
