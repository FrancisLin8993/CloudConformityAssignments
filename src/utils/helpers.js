// This file contains all helper functions and constants.
export const KNOWLEDGE_BASE_URL = 'https://cloudconformity.com/knowledge-base/';
export const AWS = 'aws';
export const AZURE = 'azure';
export const CONFORMITY = 'conformity';

// Function for filtering the needed attributes from the json object
export function filterAttributes(response) {
  const dataArray = response.data;
  const attributeArray = [];
  if (dataArray instanceof Array) {
    dataArray.forEach(element => {
      attributeArray.push(element.attributes);
    });
  }
  return attributeArray;
}

export function generateLinks(arr, providerName) {
  const linksArray = [];
  if (arr instanceof Array) {
    const filteredArr = arr.filter(element => element.provider == providerName);
    filteredArr.forEach(element => {
      const linkString = `${element.provider}/${element.name}`;
      linksArray.push(linkString);
    });
  }
  return linksArray;
}

export function addLinkAttributeToArray(targetArr, linksArr) {
  if (targetArr instanceof Array && linksArr instanceof Array) {
    for (let i = 0; i < targetArr.length; i++) {
      targetArr[i].link = linksArr[i];
    }
  }
  return targetArr;
}
