import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  timeToSummer: '.component',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}`);

    const component = shallow(<DaysToSummer />);
    const renderedTimeToSummer = component.find(select.timeToSummer).text();
    expect(renderedTimeToSummer).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtTime('2021-06-21', '');
  checkDescriptionAtTime('2021-07-28', '');
  checkDescriptionAtTime('2021-09-23', '');
});

const checkDescriptionAfterTime = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}`);

    const component = shallow(<DaysToSummer />);
    const renderedTimeToSummer = component.find(select.timeToSummer).text();
    expect(renderedTimeToSummer).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAfterTime('2021-06-03', '18 days to summer');
  checkDescriptionAfterTime('2021-06-15', '6 days to summer');
  checkDescriptionAfterTime('2021-06-20', '1 day to summer');
});

