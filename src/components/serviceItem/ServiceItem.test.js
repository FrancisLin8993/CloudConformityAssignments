import React from 'react';
import ReactDOM from 'react-dom';
import ServiceItem from './ServiceItem';
import Card from 'react-bootstrap/Card';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ServiceItem />, div);
});

describe('test props', () => {
  let testProps = {};

  beforeEach(() => {
    testProps = {
      title: 'test title',
      description: 'test description',
      link: 'test link'
    };
  });

  it('renders correct props', () => {
    const wrapper = mount(
      <ServiceItem
        title={testProps.title}
        description={testProps.description}
        link={testProps.link}
      />
    );

    expect(wrapper.props().title).toEqual('test title');
    expect(wrapper.props().description).toEqual('test description');
    expect(wrapper.props().link).toEqual('test link');
    expect(wrapper.find(Card)).toHaveLength(1);
  });
});
