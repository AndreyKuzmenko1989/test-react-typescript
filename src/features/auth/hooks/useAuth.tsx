import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { GetTokenParams, getUserAuthThunkRequestType, GetUserParams } from '../ts';
import store, { PortalStore, useAppDispatch } from '../../../store/index';
import { getUserAuthThunk, onTokenLogin, onTokenLogout } from '../redux/slice';
import { setStorageValue } from '../../../api/localStorage';

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
      setStorageValue('accessToken', '');
    },
    [dispatch]
  );

  const handleLogout = useCallback(() => {
    dispatch(onTokenLogout());
  }, [dispatch]);

  return {
    ...authState,
    handleLogin,
    checkTokenLogin,
    handleLogout,
  };
}
