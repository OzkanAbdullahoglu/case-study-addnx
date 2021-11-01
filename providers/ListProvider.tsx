import React from 'react';
import { useQuery } from '@apollo/client';

import { Data } from '../types';
import { GET_LIST_DATA } from '../library/queries';
import Loader from '../components/Loader';

type ListData = undefined | Data;

export const ListContext = React.createContext<{
  data: ListData;
}>({
  data: undefined,
});

export const ListProvider = ({ children }: { children: React.ReactChild }) => {
  const { loading, error, data } = useQuery(GET_LIST_DATA);
  if (loading) return <Loader />;
  if (error) alert(error.message);
  return (
    <ListContext.Provider value={{ data }}>{children}</ListContext.Provider>
  );
};
