import React from 'react';
import { shallow } from 'enzyme';

import Headline from './index';
import { findByTestAtrr } from '../../utils';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

const setup = (props = {}) => shallow(<Headline {...props} />);

describe('Headline component', () => {

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test header',
        desc: 'Test description',
      };
      wrapper = setup(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a H1', () => {
      const component = findByTestAtrr(wrapper, 'header');
      expect(component.length).toBe(1);
    });

    it('Should render a desc', () => {
      const component = findByTestAtrr(wrapper, 'desc');
      expect(component.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });

    it('Should not render', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });

});