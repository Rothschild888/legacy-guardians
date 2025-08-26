// Game asset definitions with optional icons
import { Asset } from '../types';

export const assets: Asset[] = [
  {
    key: 'tech',
    name: '科技股',
    expectedReturn: 0.08,
    volatility: 0.15,
    description: '以科技行业为主题的资产',
    icon: '/images/assets/tech.png',
  },
  {
    key: 'bond',
    name: '债券',
    expectedReturn: 0.03,
    volatility: 0.05,
    description: '相对稳定的债券资产',
    icon: '/images/assets/bond.png',
  },
  {
    key: 'commodity',
    name: '商品',
    expectedReturn: 0.05,
    volatility: 0.10,
    description: '涉及商品市场的资产',
    icon: '/images/assets/commodity.png',
  },
  {
    key: 'crypto',
    name: '加密货币',
    expectedReturn: 0.12,
    volatility: 0.25,
    description: '高波动性的加密资产',
    icon: '/images/assets/crypto.png',
  },
];

