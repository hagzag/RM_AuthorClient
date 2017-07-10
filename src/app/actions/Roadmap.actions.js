import { STORE_ROADMAPS } from './index.actions';
import { RoadmapsMock } from '../../mock/Roadmap.mock';
import axios from 'axios';

export const getRoadmaps = authorId => dispatch => {
  // return axios.post('roadmaps', { authorId: authorId })
  //   .then(res => {
  //     dispatch({ type: STORE_ROADMAPS, roadmaps: res.data.data });
  //   })
  //   .catch(err => console(err));
  dispatch({ type: STORE_ROADMAPS, roadmaps: RoadmapsMock });
};
