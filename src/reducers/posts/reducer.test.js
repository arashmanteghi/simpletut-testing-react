import { types } from '../../actions/types';
import postReducer from './reducer';

describe('Posts reducer', () => {
  it('Should return default state', () => {
    const newState = postReducer(undefined, {});
    expect(newState).toMatchObject([]);
  });

  it('Should return new state if receiving type', () => {
    const posts = [{title: 'test1'}, {title: 'test2'}, {title: 'test3'}];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    });
    expect(newState).toMatchObject(posts);
  });
});