import request from '@/utils/request';

export function fetchUserInfo() {
  return request({
    url: '/user/info',
    method: 'GET',
    params: {},
  });
}

export function fetchRankData(type) {
  return request({
    url: '/rank',
    method: 'GET',
    params: { type },
  });
}

export function editRankData(queryParam, bodyParam) {
  return request({
    url: '/rank',
    method: 'POST',
    params: queryParam,
    data: bodyParam,
  });
}
