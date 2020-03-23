import React from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ContentHeader from './ContentHeader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContentHeader />, div);
});

it('render childrens correctly', () => {
  const wrapper = shallow(<ContentHeader />);
  expect(wrapper.find(Jumbotron)).toHaveLength(1);
  expect(wrapper.find(Row)).toHaveLength(2);
  expect(wrapper.find(Col)).toHaveLength(3);
});
