import React from 'react';
import ReactDOM from 'react-dom';
import ProviderLandingPage from './ProviderLandingPage';
import KnowledgeBaseInfo from '../knowledgeBaseInfo/KnowledgeBaseInfo';
import ServiceList from '../serviceList/ServiceList';
import { shallow } from 'enzyme';
import ProviderSelection from '../providerSelection/ProviderSelection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProviderLandingPage />, div);
});

describe('test rendering children', () => {
  const wrapper = shallow(<ProviderLandingPage />);

  it('renders knowledge base info component', () => {
    expect(wrapper.find(ServiceList)).toHaveLength(2);
    expect(wrapper.find(KnowledgeBaseInfo)).toHaveLength(1);
    expect(wrapper.find(ProviderSelection)).toHaveLength(1);
  });
});
