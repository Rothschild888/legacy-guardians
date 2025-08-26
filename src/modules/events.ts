// Market event definitions with optional icons
import { MarketEvent } from '../types';

export const events: MarketEvent[] = [
  {
    id: 1,
    name: '科技泡沫',
    affected: ['tech', 'crypto'],
    impactRange: { tech: [-0.15, -0.05], crypto: [-0.10, -0.03] },
    probability: 0.1,
    description: '科技股和加密货币遭遇泡沫，价格大幅下跌。',
    icon: '/images/events/tech-bubble.png',
  },
  {
    id: 2,
    name: '大宗商品危机',
    affected: ['commodity', 'tech'],
    impactRange: { commodity: [-0.12, -0.04], tech: [-0.05, -0.01] },
    probability: 0.08,
    description: '商品市场危机，科技股也受影响。',
    icon: '/images/events/commodity-crisis.png',
  },
  {
    id: 3,
    name: '科技牛市',
    affected: ['tech', 'crypto'],
    impactRange: { tech: [0.05, 0.15], crypto: [0.03, 0.10] },
    probability: 0.12,
    description: '科技股和加密货币迎来牛市，价格大幅上涨。',
    icon: '/images/events/tech-bull.png',
  },
  {
    id: 4,
    name: '债券利好',
    affected: ['bond'],
    impactRange: { bond: [0.02, 0.08] },
    probability: 0.10,
    description: '债券市场利好，收益提升。',
    icon: '/images/events/bond-rally.png',
  },
  {
    id: 5,
    name: '商品暴跌',
    affected: ['commodity'],
    impactRange: { commodity: [-0.15, -0.05] },
    probability: 0.09,
    description: '商品市场暴跌，注意分散风险。',
    icon: '/images/events/commodity-crash.png',
  },
  {
    id: 6,
    name: '加密波动',
    affected: ['crypto'],
    impactRange: { crypto: [-0.20, 0.20] },
    probability: 0.15,
    description: '加密货币剧烈波动，风险与机会并存。',
    icon: '/images/events/crypto-swing.png',
  },
];

