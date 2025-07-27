import Mock from 'better-mock';
import { generateId } from '../utils';

// 用户列表数据
const userList = Mock.mock({
  'data|100': [
    {
      'id|+1': 1,
      userId: () => generateId(),
      username: '@cname',
      email: '@email',
      phone: /^1[3456789]\d{9}$/,
      'gender|1': ['male', 'female', 'unknown'],
      avatar: '@image(100x100, @color, @cword(2))',
      createTime: '@datetime',
      'status|1': [0, 1],
    },
  ],
}).data;

export default [
  // 获取用户列表（支持分页）
  {
    url: '/api/users',
    method: 'get',
    template: config => {
      const { page = 1, pageSize = 10, username = '' } = config.query;
      const filteredData = username ? userList.filter(item => item.username.includes(username)) : userList;

      return Mock.mock({
        code: 200,
        message: 'success',
        data: {
          total: filteredData.length,
          page: +page,
          pageSize: +pageSize,
          list: filteredData.slice((page - 1) * pageSize, page * pageSize),
        },
      });
    },
  },

  // 获取单个用户
  {
    url: '/api/users/\\d+',
    method: 'get',
    template: config => {
      const id = config.url.match(/\/api\/users\/(\d+)/)[1];
      const user = userList.find(item => item.id === +id);

      return Mock.mock({
        code: 200,
        message: 'success',
        data: user || null,
      });
    },
  },

  // 创建用户
  {
    url: '/api/users',
    method: 'post',
    template: config => {
      const newUser = JSON.parse(config.body);
      newUser.id = userList.length + 1;
      newUser.userId = generateId();
      newUser.createTime = new Date().toISOString();
      userList.unshift(newUser);

      return Mock.mock({
        code: 201,
        message: '创建成功',
        data: newUser,
      });
    },
  },

  // 更新用户
  {
    url: '/api/users/\\d+',
    method: 'put',
    template: config => {
      const id = config.url.match(/\/api\/users\/(\d+)/)[1];
      const index = userList.findIndex(item => item.id === +id);

      if (index !== -1) {
        userList[index] = { ...userList[index], ...JSON.parse(config.body) };
        return Mock.mock({
          code: 200,
          message: '更新成功',
          data: userList[index],
        });
      }

      return Mock.mock({
        code: 404,
        message: '用户不存在',
      });
    },
  },

  // 删除用户
  {
    url: '/api/users/\\d+',
    method: 'delete',
    template: config => {
      const id = config.url.match(/\/api\/users\/(\d+)/)[1];
      const index = userList.findIndex(item => item.id === +id);

      if (index !== -1) {
        userList.splice(index, 1);
        return Mock.mock({
          code: 200,
          message: '删除成功',
        });
      }

      return Mock.mock({
        code: 404,
        message: '用户不存在',
      });
    },
  },
];
