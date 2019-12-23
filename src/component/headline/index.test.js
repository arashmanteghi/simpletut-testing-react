import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import Headline from './index';
import { findByTestAtrr, checkProps } from '../../utils';

const setup = (props = {}) => shallow(<Headline {...props} />);

describe('Headline component', () => {

  describe('Checking proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        header: 'Test header',
        desc: 'Test desc',
        tempArr: [{
          fName: 'Test fName',
          lName: 'Test lName',
          email: 'test@email.com',
          age: 31,
          onlineStatus: true,
        }]
      }
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

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