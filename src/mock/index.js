import Mock from 'better-mock';

Mock.setup({ timeout: '500-2000' });
Mock.mock('http://localhost:3000/api/react/user/info', 'GET', {
  id: 1,
  name: '@cname',
});
