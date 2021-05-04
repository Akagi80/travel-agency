import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render', () => {
    const component = shallow(<OrderOption
      type='text'
      name='name'
    />);

    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);

    expect(component).toEqual({});
  });

  it('shuold show title props name', () => {
    const expectedName = 'name';
    const expectedType = 'text';
    const component = shallow(<OrderOption
      type={expectedType}
      name={expectedName}
    />);

    expect(component.find('.title').text()).toEqual(expectedName);
  });
});

