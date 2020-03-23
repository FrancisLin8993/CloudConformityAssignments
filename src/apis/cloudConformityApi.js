import axios from 'axios';
import {
  CLOUD_CONFORMITY_BASE_URL,
  CLOUD_CONFORMITY_CONTENT_TYPE,
  PROXY_URL
} from './apiUtils';
import apiKeys from './apiKeys';

const cloudConfomrityInstance = new Headers({
  Authorization: `ApiKey ${apiKeys.ApiKey}`,
  'Content-Type': CLOUD_CONFORMITY_CONTENT_TYPE,
  Accept: CLOUD_CONFORMITY_CONTENT_TYPE
});

// const cloudConfomrityInstance = axios.create({
//   baseURL: PROXY_URL + CLOUD_CONFORMITY_BASE_URL
// });

// cloudConfomrityInstance.defaults.headers.common[
//   'Authorization'
// ] = `ApiKey ${apiKeys.ApiKey}`;
// cloudConfomrityInstance.defaults.headers[
//   'Content-Type'
// ] = CLOUD_CONFORMITY_CONTENT_TYPE;
// cloudConfomrityInstance.defaults.headers[
//   'Accept'
// ] = CLOUD_CONFORMITY_CONTENT_TYPE;

export default cloudConfomrityInstance;
