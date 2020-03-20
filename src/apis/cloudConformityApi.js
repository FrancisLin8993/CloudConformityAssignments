import axios from 'axios';
import { CLOUD_CONFORMITY_BASE_URL, CLOUD_CONFORMITY_CONTENT_TYPE } from './apiUtils';
import apiKeys from './apiKeys';

const cloudConfomrityInstance = axios.create({
  baseURL: CLOUD_CONFORMITY_BASE_URL
});

cloudConfomrityInstance.defaults.headers.common['Authorization'] = `ApiKey ${apiKeys}`;
cloudConfomrityInstance.defaults.headers.common['Content-Type'] = CLOUD_CONFORMITY_CONTENT_TYPE;

export default cloudConfomrityInstance;