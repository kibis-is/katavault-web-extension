// types
import type TState from './TState';

type TPersistedState = Pick<TState, 'colorMode' | 'encryptedChallenge'>;

export default TPersistedState;
