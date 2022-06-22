import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {PortalStore} from '../ts'

export const { isLoggedIn } = useSelector((state: PortalStore) => state.auth);