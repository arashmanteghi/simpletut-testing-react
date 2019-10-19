import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

import { findByTestAtrr } from '../../utils';

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
}

describe ('Header Component', () => {

  let component;
  beforeEach(() => {
    component = setup();
  })

  it('Should render without error', () => {
    const wrapper = findByTestAtrr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const wrapper = findByTestAtrr(component, 'logoIMG');
    expect(wrapper.length).toBe(1);
  });

});