// This file contains all helper functions and constants.
export const KNOWLEDGE_BASE_URL = 'https://cloudconformity.com/knowledge-base/';
export const AWS = 'aws';
export const AZURE = 'azure';
export const GCP = 'gcp';
export const CONFORMITY = 'conformity';

// Function for filtering the needed attributes from the json object
export function filterAttributes(response, providerName) {
  const dataArray = response.data;
  let filteredArr = [];
  const attributeArray = [];
  if (dataArray instanceof Array) {
    filteredArr = dataArray.filter(
      element => element.attributes.provider == providerName
    );

    filteredArr.forEach(element => {
      attributeArray.push(element.attributes);
    });
  }
  return attributeArray;
}

export function generateLinks(arr) {
  sortItems(arr);
  const linksArray = [];
  if (arr instanceof Array) {
    arr.forEach(element => {
      const linkString = `${element.provider}/${element.name}`;
      linksArray.push(linkString);
    });
  }
  return linksArray;
}

function sortItems(arr) {
  if (arr instanceof Array) {
    arr.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
}

export function addLinkAttributeToArray(targetArr, linksArr) {
  if (targetArr instanceof Array && linksArr instanceof Array) {
    for (let i = 0; i < targetArr.length; i++) {
      targetArr[i].link = linksArr[i];
    }
  }
  return targetArr;
}
