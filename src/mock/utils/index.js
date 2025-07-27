import Mock from 'better-mock';

// 生成随机ID
export const generateId = () => Mock.Random.id();

// 生成随机日期
export const generateDate = (format = 'yyyy-MM-dd') => Mock.Random.date(format);

// 分页数据包装器
export const wrapPageData = (data, page = 1, pageSize = 10) => {
  const total = data.length;
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  return {
    total,
    page,
    pageSize,
    list: data.slice(start, end),
  };
};
