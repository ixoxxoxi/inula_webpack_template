import { Random } from 'better-mock';

export default [
  {
    url: 'rank',
    method: 'get',
    template: {
      success: true,
      'data|10': [
        {
          id: '@increment',
          region: '@city',
          ydtvalue: '@integer(0,100)%',
          yoyvalue: '@integer(0,100)%',
        },
      ],
    },
  },
  {
    url: 'rank-fn',
    method: 'get',
    template: options => {
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
    },
  },
];
