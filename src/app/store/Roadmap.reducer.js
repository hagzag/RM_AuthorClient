import { STORE_ROADMAPS, ADD_ROADMAP, GET_ROADMAPS } from '../actions/index.actions';

const INITIAL_STATE = {
  roadmaps: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ROADMAPS:
      return state;
    case STORE_ROADMAPS:
      return { ...state, roadmaps: action.roadmaps };
    case ADD_ROADMAP:
      return { ...state, roadmaps: [...state.roadmaps, action.roadmap] };
    default:
      return state;
  }
}

