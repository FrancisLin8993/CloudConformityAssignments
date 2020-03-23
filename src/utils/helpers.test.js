import { splitArray, filterAttributes, generateLinks } from './helpers';

it('should return a group of arrays, each array contains two items', () => {
  const array = [1, 2, 3, 4, 5, 6];
  const result = splitArray(array);
  expect(result.length).toEqual(3);
  expect(result[0].length).toEqual(2);
  expect(result[1].length).toEqual(2);
  expect(result[2].length).toEqual(2);
});

it('should return a group of arrays, the last array has one item, each of the rest arrays havs two items', () => {
  const array = [1, 2, 3, 4, 5];
  const result = splitArray(array);
  expect(result.length).toEqual(3);
  expect(result[0].length).toEqual(2);
  expect(result[1].length).toEqual(2);
  expect(result[2].length).toEqual(1);
});

describe('tests related to cloudconformity json response', () => {
  let json = {};
  beforeEach(() => {
    json = {
      data: [
        {
          type: 'services',
          id: 'EBS',
          attributes: { name: 'EBS', provider: 'aws' },
          relationships: {
            rules: {
              data: [
                { type: 'rules', id: 'EBS-001' },
                { type: 'rules', id: 'EBS-002' },
                { type: 'rules', id: 'EBS-003' },
                { type: 'rules', id: 'EBS-004' },
                { type: 'rules', id: 'EBS-005' },
                { type: 'rules', id: 'EBS-006' },
                { type: 'rules', id: 'EBS-007' },
                { type: 'rules', id: 'EBS-008' },
                { type: 'rules', id: 'EBS-009' },
                { type: 'rules', id: 'EBS-010' },
                { type: 'rules', id: 'EBS-011' },
                { type: 'rules', id: 'EBS-012' },
                { type: 'rules', id: 'EBS-013' }
              ]
            }
          }
        },
        {
          type: 'services',
          id: 'Route53',
          attributes: { name: 'Route53', provider: 'aws' },
          relationships: {
            rules: {
              data: [
                { type: 'rules', id: 'Route53-001' },
                { type: 'rules', id: 'Route53-002' },
                { type: 'rules', id: 'Route53-003' },
                { type: 'rules', id: 'Route53-004' },
                { type: 'rules', id: 'Route53-005' },
                { type: 'rules', id: 'Route53-006' },
                { type: 'rules', id: 'Route53-007' },
                { type: 'rules', id: 'Route53-008' },
                { type: 'rules', id: 'Route53-009' },
                { type: 'rules', id: 'Route53-010' },
                { type: 'rules', id: 'Route53-011' }
              ]
            }
          }
        },
        {
          type: 'services',
          id: 'StorageAccounts',
          attributes: { name: 'StorageAccounts', provider: 'azure' },
          relationships: {
            rules: {
              data: [
                { type: 'rules', id: 'StorageAccounts-001' },
                { type: 'rules', id: 'StorageAccounts-002' },
                { type: 'rules', id: 'StorageAccounts-003' },
                { type: 'rules', id: 'StorageAccounts-004' },
                { type: 'rules', id: 'StorageAccounts-005' }
              ]
            }
          }
        }
      ]
    };
  });

  it('should return an array of attributes inside the response of cloud conformity api', () => {
    const result = filterAttributes(json);

    expect(result.length).toEqual(3);
    expect(result[0].name).toEqual('EBS');
    expect(result[0].provider).toEqual('aws');
    expect(result[1].name).toEqual('Route53');
    expect(result[1].provider).toEqual('aws');
    expect(result[1].name).toEqual('Route53');
    expect(result[1].provider).toEqual('aws');
    expect(result[2].name).toEqual('StorageAccounts');
    expect(result[2].provider).toEqual('azure');
  });

  it('should return the correct link', () => {
    const attributesArr = filterAttributes(json);
    const linksArr = generateLinks(attributesArr, 'aws');

    expect(linksArr.length).toEqual(2);
    expect(linksArr[0]).toEqual('aws/EBS');
    expect(linksArr[1]).toEqual('aws/Route53');
  });
});
