import { STORE_ROADMAPS } from './index.actions';

export const getRoadmaps = authorId => dispatch => {
  return axios.post('roadmaps', { authorId: authorId })
    .then(res => {
      dispatch({ type: STORE_ROADMAPS, roadmaps: res.data.data });
    })
    .catch(err => console(err));
};