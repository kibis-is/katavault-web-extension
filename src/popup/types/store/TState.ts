// types
import type { ISlice as IAuthenticationSlice } from '@/popup/slices/createAuthenticationSlice';
import type { ISlice as ILayoutSlice } from '@/popup/slices/createLayoutSlice';

type TState = IAuthenticationSlice & ILayoutSlice;

export default TState;
