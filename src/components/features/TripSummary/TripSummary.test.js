import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Componment TestSummary', () => {
  it('should render correct link', () => {
    const expectedId = 'abc';
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary
      id={expectedId}
      tags={[]}
    />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('image should have correct scr and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary
      image={expectedSrc}
      name={expectedAlt}
      tags={[]}
    />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props: name, cost and days', () => {
    const expectedName = 'tripName';
    const expectedCost = '1000$';
    const expectedDays = 14;
    const component = shallow(<TripSummary
      name={expectedName}
      cost={expectedCost}
      days={expectedDays}
      tags={[]}
    />);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').childAt(1).text()).toEqual(`from ${expectedCost}`);
    expect(component.find('.details').childAt(0).text()).toEqual(`${expectedDays} days`);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render div with tags class, if props tags are false or array are empty', () => {
    const component = shallow(<TripSummary />);

    expect(component.hasClass('tags')).toEqual(false);
  });
});
