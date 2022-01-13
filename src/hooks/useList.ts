import { useContext } from 'react';
import { ListsContext } from '../contexts/ListContext';

export function useList() {
  const value = useContext(ListsContext)

  return value
}
