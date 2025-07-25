import Mock, { Random } from 'better-mock';

Mock.setup({ timeout: '500-2000' });

console.log('Mock-->', Mock);

Mock.mock('http://localhost:3000/api/react/user/info', 'GET', {
  id: 1,
  name: '@cname',
});

// Mock.mock(/.*?\/rank/, 'GET', {
//   success: true,
//   'data|10': [
//     {
//       id: '@increment',
//       region: '@city',
//       ydtvalue: '@integer(0,100)%',
//       yoyvalue: '@integer(0,100)%',
//     },
//   ],
// });

Mock.mock(/.*?\/rank/, 'GET', options => {
  console.log('mock_options-->', options);
  const response = {
    success: true,
    data: Array(10)
      .fill()
      .map(_ => ({
        id: Random.increment(1),
        region: Random.county(true),
        ydtvalue: Random.integer(1, 100),
        yoyvalue: `${Random.integer(1, 100)}%`,
      })),
  };

  return response;
});

Mock.mock(/.*?\/rank/, 'POST', options => {
  console.log('mock_options-->', options);
  return {};
});

const regionCode = {
  '0001': '全球',
  '0010': '南非',
  '0020': '北非',
  '0030': '中东',
  '0040': '中亚',
};

const productCode = {
  1000: '所有服务',
  1001: 'CS',
  1002: 'CS存量',
  1003: 'CS增量',
  2001: 'BS存量',
  2001: 'BS增量',
  3001: '维护',
  4001: '培训',
};

const data = [
  {
    productCode: '1001',
    lastYearValue: 182.6,
    curYearValue: 204,
    yoyRate: '10%',
    budgetValue: 304,
    budgetCompletionRate: '60%',
  },
  {
    productCode: '1002',
    lastYearValue: 162,
    curYearValue: 184,
    yoyRate: '13%',
    budgetValue: 204,
    budgetCompletionRate: '50%',
  },
  {
    productCode: '1002',
    lastYearValue: 162,
    curYearValue: 184,
    yoyRate: '13%',
    budgetValue: 204,
    budgetCompletionRate: '50%',
  },
];
