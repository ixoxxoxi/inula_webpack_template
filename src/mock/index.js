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
