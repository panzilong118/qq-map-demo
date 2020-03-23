import { origin } from './adapter';

// 职住汇总的数据
export function getohStatistic(params) {
  return origin.post('/api/hw/summary', params);
}
