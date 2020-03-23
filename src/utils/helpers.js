// This file contains all helper functions and constants.
export const KNOWLEDGE_BASE_URL = 'https://cloudconformity.com/knowledge-base/';
export const AWS = 'aws';
export const AZURE = 'azure';
// split an array into arrays that each array contains two items.
export function splitArray(arr) {
  let rowsArray = [];
  if (arr instanceof Array) {
    let rowItemArray = [];
    for (let i = 0; i <= arr.length - 1; i++) {
      if (i === arr.length - 1) {
        rowsArray.push([arr[i]]);
      } else {
        rowItemArray = arr.slice(i, i + 2);
        rowsArray.push(rowItemArray);
        i++;
      }
    }
  }
  return rowsArray;
}

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

export function generateLinks(arr) {
  const linksArray = [];
  if (arr instanceof Array) {
    arr.forEach(element => {
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
