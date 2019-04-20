const stateKey = 'state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(stateKey);
    if (serializedState === null || serializedState === 'undefined') {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log('Error loading state from local storage.', e);
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateKey, serializedState);
  } catch (e) {
    console.log('Error saving state to local storage.', e);
  }
};
