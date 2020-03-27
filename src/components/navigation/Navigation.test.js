import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import NavSubmenu from '../navSubmenu/NavSubmenu';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation />, div);
});

describe('<Navigation />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });
  it('loads correct children', () => {
    expect(wrapper.find('nav')).toHaveLength(1);
    expect(wrapper.find(NavSubmenu)).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(4);
  });

  it('loads correct styles', () => {
    expect(wrapper.find('.wrp-nav')).toHaveLength(1);
    expect(wrapper.find('.navigation')).toHaveLength(1);
  });

  //Simulate the mouse event when testing.
  it('renders correct state when hover and unhover', () => {
    expect(wrapper.state('isHovered')).toBe(false);
    wrapper
      .find('ul')
      .childAt(1)
      .simulate('mouseenter');
    expect(wrapper.state('isHovered')).toBe(true);
    expect(wrapper.find('li.active')).toHaveLength(1);
    wrapper
      .find('ul')
      .childAt(1)
      .simulate('mouseleave');
    expect(wrapper.state('isHovered')).toBe(false);
  });
});
