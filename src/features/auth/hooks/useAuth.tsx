import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { GetTokenParam, getUserAuthThunkRequestType, GetUserParams } from '../ts';
import store, { PortalStore, useAppDispatch } from '../../../store/index';
import { getTokenAuthThunk, getUserAuthThunk } from '../redux/slice';

export function useAuth() {
  const authState = useSelector((state: PortalStore) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogin = useCallback(
    (params: GetUserParams) => {
      dispatch(getUserAuthThunk(params));
    },
    [dispatch]
  );

  const checkToken = useCallback(
    (param: GetTokenParam) => {
      dispatch(getTokenAuthThunk(param));
    },
    [dispatch]
  );

  return {
    ...authState,
    handleLogin,
    checkToken,
  };
}
