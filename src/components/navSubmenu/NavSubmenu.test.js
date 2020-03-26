import React from 'react';
import ReactDOM from 'react-dom';
import NavSubmenu from './NavSubmenu';
import NavSubmenuItem from '../navSubmenuItem/NavSubmenuItem';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavSubmenu />, div);
});

describe('<NavSubmenu />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<NavSubmenu />);
  });
  it('loads correct children', () => {
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find(NavSubmenuItem)).toHaveLength(3);
  });

  it('renders icon correctly', () => {
    expect(wrapper.find('i')).toHaveLength(1);
    expect(wrapper.find('.icomoon')).toHaveLength(1);
    expect(wrapper.find('.icon-arrow-down2')).toHaveLength(1);
  });
});
