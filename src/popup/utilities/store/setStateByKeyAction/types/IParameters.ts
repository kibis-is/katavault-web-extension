// types
import { IActionAPI, TState } from '@/popup/types';

interface IParameters {
  api: IActionAPI;
  key: keyof TState;
}

export default IParameters;
