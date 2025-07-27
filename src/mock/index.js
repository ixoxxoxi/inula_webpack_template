import Mock from 'better-mock';
import userModule from './module/user';
import rankModule from './module/rank';

// 全局错误处理
Mock.XHR.prototype.withCredentials = false;
Mock.setup({
  timeout: '200-1000',
});

// 合并所有模块
const mockModules = [...userModule, ...rankModule];

// 注册所有模拟接口
const registerMockApis = () => {
  mockModules.forEach(item => {
    const { url, method = 'get', template } = item;
    const regexUrl = new RegExp(`.*?${url}`);

    Mock.mock(regexUrl, method.toLowerCase(), template);
  });
  console.log('%c MockJS 已启动！', 'color: #00BFFF; font-weight: bold;');
};

registerMockApis();

// const regionCode = {
//   '0001': '全球',
//   '0010': '南非',
//   '0020': '北非',
//   '0030': '中东',
//   '0040': '中亚',
// };

// const productCode = {
//   1000: '所有服务',
//   1001: 'CS',
//   1002: 'CS存量',
//   1003: 'CS增量',
//   2001: 'BS存量',
//   2001: 'BS增量',
//   3001: '维护',
//   4001: '培训',
// };

// const data = [
//   {
//     productCode: '1001',
//     lastYearValue: 182.6,
//     curYearValue: 204,
//     yoyRate: '10%',
//     budgetValue: 304,
//     budgetCompletionRate: '60%',
//   },
//   {
//     productCode: '1002',
//     lastYearValue: 162,
//     curYearValue: 184,
//     yoyRate: '13%',
//     budgetValue: 204,
//     budgetCompletionRate: '50%',
//   },
//   {
//     productCode: '1002',
//     lastYearValue: 162,
//     curYearValue: 184,
//     yoyRate: '13%',
//     budgetValue: 204,
//     budgetCompletionRate: '50%',
//   },
// ];
