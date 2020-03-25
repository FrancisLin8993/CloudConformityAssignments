import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('calls componentDidMount', () => {
  sinon.spy(App.prototype, 'componentDidMount');
  const wrapper = mount(<App />);
  expect(App.prototype.componentDidMount).toHaveProperty('callCount', 1);
});

it('calls componentWillUnmount', () => {
  sinon.spy(App.prototype, 'componentWillUnmount');
  const wrapper = mount(<App />);
  wrapper.unmount();
  expect(App.prototype.componentWillUnmount).toHaveProperty('callCount', 1);
});
