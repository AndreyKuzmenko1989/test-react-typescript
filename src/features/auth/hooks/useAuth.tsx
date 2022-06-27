import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { GetTokenParams, getUserAuthThunkRequestType, GetUserParams } from '../ts';
import store, { PortalStore, useAppDispatch } from '../../../store/index';
import { getUserAuthThunk, onTokenLogin } from '../redux/slice';

export function useAuth() {
  const authState = useSelector((state: PortalStore) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogin = useCallback(
    (params: GetUserParams) => {
      dispatch(getUserAuthThunk(params));
    },
    [dispatch]
  );

  const checkTokenLogin = useCallback(
    (params: GetTokenParams) => {
      dispatch(onTokenLogin(params));
    },
    [dispatch]
  );

  return {
    ...authState,
    handleLogin,
    checkTokenLogin,
  };
}
