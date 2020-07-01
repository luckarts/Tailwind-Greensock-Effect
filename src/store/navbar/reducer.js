import { IS_OPEN } from './actions';

export default (state = { isOpen: false }, action) => {
  console.log('call reducer');
  switch (action.type) {
    case IS_OPEN:
      return {
        isOpen: !state.isOpen
      };

    default:
      return state;
  }
};
