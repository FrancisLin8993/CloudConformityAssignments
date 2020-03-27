import {
  filterAttributes,
  generateLinks,
  transformProviderName
} from './helpers';

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
    const result = filterAttributes(json, 'aws');

    expect(result.length).toEqual(2);
    expect(result[0].name).toEqual('EBS');
    expect(result[0].provider).toEqual('aws');
    expect(result[1].name).toEqual('Route53');
    expect(result[1].provider).toEqual('aws');
  });

  it('should correctly sort items in an array', () => {
    const result = filterAttributes(json, 'aws');
    expect(result.length).toEqual(2);
    expect(result[0].name).toEqual('EBS');
    expect(result[0].provider).toEqual('aws');
    expect(result[1].name).toEqual('Route53');
    expect(result[1].provider).toEqual('aws');
  });

  it('should return the correct link', () => {
    const attributesArr = filterAttributes(json, 'aws');
    const linksArr = generateLinks(attributesArr);

    expect(linksArr.length).toEqual(2);
    expect(linksArr[0]).toEqual('aws/EBS');
    expect(linksArr[1]).toEqual('aws/Route53');
  });
});

it('should transform provider names correctly', () => {
  const aws = transformProviderName('aws');
  const azure = transformProviderName('azure');
  expect(aws).toEqual('AWS');
  expect(azure).toEqual('Azure');
});
