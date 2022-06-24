import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PortalStore, getUserAuthThunkRequestType } from '../ts';
import store from '../../../store/index';
import { getUserAuthThunk } from '../../auth/redux/slice';

export function useAuth() {
  const authState = useSelector((state: PortalStore) => state.auth);
  const dispatch = useDispatch();
  const handleLogin = useCallback(
    (email: string, password: string) => {
      dispatch(getUserAuthThunk({ email, password }));
    },
    [dispatch]
  );

  return {
    ...authState,
    handleLogin,
  };
}
