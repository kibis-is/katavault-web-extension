// types
import type { IParameters } from './types';

export default function setStateByKeyAction<Payload = undefined>({
  api,
  key,
}: IParameters): (payload: Payload) => void {
  return (value) =>
    api.setState((state) => ({
      ...state,
      [key]: value,
    }));
}
