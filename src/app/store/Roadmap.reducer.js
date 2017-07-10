import { STORE_ROADMAPS } from '../actions/index.actions';

const INITIAL_STATE = {
  roadmaps: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_ROADMAPS:
      return { ...state, roadmaps: action.roadmaps };
    default:
      return state;
  }
}

