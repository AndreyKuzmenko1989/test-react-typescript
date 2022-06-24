import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthThunkRequestType, GetUserParams } from '../ts';
import store, { PortalStore, useAppDispatch } from '../../../store/index';
import { getUserAuthThunk } from '../redux/slice';

export function useAuth() {
  const authState = useSelector((state: PortalStore) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogin = useCallback(
    (params: GetUserParams) => {
      dispatch(getUserAuthThunk(params));
    },
    [dispatch]
  );

  return {
    ...authState,
    handleLogin,
  };
}
