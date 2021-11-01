import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { ListProvider } from '../providers/ListProvider';
import '../styles/globals.css';

const client = new ApolloClient({
  uri: 'https://fakeql.com/graphql/1edbba838690de0476d58a41a7718d6c',
  cache: new InMemoryCache(),
});

function Addinex({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ListProvider>
        <Component {...pageProps} />
      </ListProvider>
    </ApolloProvider>
  );
}

export default Addinex;
