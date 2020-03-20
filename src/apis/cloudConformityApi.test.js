import axios from 'axios';
import moxios from 'moxios';
import CLOUD_CONFORMITY_BASE_URL from './apiUtils';
import CLOUD_CONFORMITY_CONTENT_TYPE from './apiUtils';
import apiKeys from './apiKeys';

describe('mocking axios create', () => {
  let axiosInstance;
  beforeEach(() => {
    axiosInstance = axios.create();
    moxios.install(axiosInstance);
  });
  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });
  it('should axios a thing', (done) => {
      moxios.stubRequest(CLOUD_CONFORMITY_BASE_URL, {
        status: 200,
        responseText: 'reducedAsxResponse'
      });
      axiosInstance.get(CLOUD_CONFORMITY_BASE_URL)
          .then(res => assert(res.status === 200))
          .finally(done);
  });
});