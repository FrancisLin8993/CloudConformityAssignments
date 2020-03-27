import { CLOUD_CONFORMITY_CONTENT_TYPE } from './apiUtils';
import apiKeys from './apiKeys';

const cloudConformityRequestHeader = new Headers({
  Authorization: `ApiKey ${apiKeys.ApiKey}`,
  'Content-Type': CLOUD_CONFORMITY_CONTENT_TYPE,
  Accept: CLOUD_CONFORMITY_CONTENT_TYPE
});

export default cloudConformityRequestHeader;
