import { CLOUD_CONFORMITY_CONTENT_TYPE } from './apiUtils';
import apiKeys from './apiKeys';

// Defined the required header when calling cloud conformity api.
const cloudConformityRequestHeader = new Headers({
  Authorization: `ApiKey ${apiKeys.ApiKey}`,
  'Content-Type': CLOUD_CONFORMITY_CONTENT_TYPE,
  Accept: CLOUD_CONFORMITY_CONTENT_TYPE
});

export default cloudConformityRequestHeader;
