import request from '@/utils/request';

export function fetchUserInfo() {
  return request({
    url: '/user/info',
    method: 'GET',
    params: {},
  });
}
