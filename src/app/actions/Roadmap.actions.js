import { STORE_ROADMAPS } from './index.actions';
import { RoadmapsMock } from '../../mock/Roadmap.mock';
import axios from 'axios';

export const getRoadmaps = authorId => dispatch => {
  return axios.get('roadmaps')
    .then(res => {
      dispatch({ type: STORE_ROADMAPS, roadmaps: res.data.data });
    })
    .catch(err => console.log(err));
  // dispatch({ type: STORE_ROADMAPS, roadmaps: RoadmapsMock });
};

export const addRoadmap = roadmap => dispatch => {
  return axios.post('roadmaps', { roadmap: roadmap })
    .then(res => {
      dispatch(getRoadmaps());
    })
    .catch(err => console.log(err));
};

export const deleteRoadmap = roadmapId => dispatch => {
 return axios.delete(`roadmaps/${roadmapId}`)
   .then(res => {
     dispatch(getRoadmaps());
   })
   .catch(err => console.log(err));
};

export const eritRoadmap = roadmap => dispatch => {
  return axios.put('roadmaps', { roadmap: roadmap })
    .then(res => {
      dispatch(getRoadmaps());
    })
    .catch(err => console.log(err));
};