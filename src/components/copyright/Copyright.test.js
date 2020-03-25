import React from 'react';
import ReactDOM from 'react-dom';
import Copyright from './Copyright';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Copyright />, div);
});

it('render styles and component correctly', () => {
  const wrapper = shallow(<Copyright />);
  expect(wrapper.find('span')).toHaveLength(1);
  expect(wrapper.find('.copyright')).toHaveLength(1);
});
