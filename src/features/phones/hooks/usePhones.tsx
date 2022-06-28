import { useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import store, { PortalStore, useAppDispatch } from '../../../store/index';
import { getPhonesThunk } from '../redux/slice';
import { getPhonesThunkRequestType } from '../ts';
import sortByFirstName from '../utils/sortByFirstName'

export function usePhones() {
  const { phones, ...phonesState } = useSelector((state: PortalStore) => state.phones);
  const dispatch = useAppDispatch();
  const sortedContactsByName = useMemo(() => phones?.sort(sortByFirstName) || [], [phones]);
  const getPhones = useCallback(() => {
    if (phones.length <= 0) {
      dispatch(getPhonesThunk());
    }
  }, [dispatch]);

  return {
    ...phonesState,
    phones,
    getPhones,
    sortedContactsByName
  };
}
