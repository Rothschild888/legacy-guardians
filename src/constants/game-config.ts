// Legacy Guardians - Game Configuration

export const GAME_CONFIG = {
	// Initial Resources
	INITIAL_COINS: 100,
	INITIAL_GEMS: 5,
	
	// Goals and Limits
	WEALTH_GOAL: 300, // 300% return target
	MAX_BADGES: 9,
	MAX_DAYS: 365,
	
	// Probabilities
	DAILY_EVENT_PROBABILITY: 0.8,
	DILEMMA_PROBABILITY: 0.4,
	QUIZ_PROBABILITY: 0.2,
	Easter_EGG_PROBABILITY: 0.15,
	
	// Asset Allocation
	MIN_WEIGHT: 0,
	MAX_WEIGHT: 100,
	TOTAL_WEIGHT: 100,
	
	// Returns and Rewards
	BASE_DAILY_RETURN: 0.02, // 2% base return
	COIN_REWARD_RATIO: 0.1, // 10% of returns as coins
	GEM_REWARD_THRESHOLD: 50, // 50% return threshold for gem reward
	
	// Badge Requirements
	BADGE_REQUIREMENTS: {
		DIVERSIFIER: 4, // Minimum 4 asset types
		LONG_TERM_VISION: 3, // 3 consecutive positive days
		RISK_MANAGER: 60, // Max single asset weight
	},
	
	// Theme Options
	THEMES: {
		CYBERPUNK: 'cyberpunk',
		CLASSIC: 'classic',
		MEME: 'meme',
	},
	
	// Avatar Options
	AVATAR_OPTIONS: [
		'https://cdn-icons-png.flaticon.com/512/616/616494.png',
		'https://cdn-icons-png.flaticon.com/512/616/616408.png',
		'https://cdn-icons-png.flaticon.com/512/616/616430.png',
		'https://cdn-icons-png.flaticon.com/512/616/616408.png',
		'https://cdn-icons-png.flaticon.com/512/616/616408.png',
		'https://cdn-icons-png.flaticon.com/512/616/616408.png',
	],
	
	// Default Company Name
	DEFAULT_COMPANY_NAME: '我的空岛公司',
	
	// Wheel Outcomes
	WHEEL_OUTCOMES: [
		{ label: '收益+10%', effect: 'returns_plus_10', color: '#27ae60' },
		{ label: '收益-10%', effect: 'returns_minus_10', color: '#e74c3c' },
		{ label: '获得分散者徽章', effect: 'badge_diversifier', color: '#00fff7' },
		{ label: '风险提升', effect: 'risk_increase', color: '#ff00cc' },
		{ label: '知识大师徽章', effect: 'badge_knowledge_master', color: '#f6d365' },
		{ label: '无变化', effect: 'no_change', color: '#888' },
	],
	
	// Dilemma Questions
	DILEMMA_QUESTIONS: [
		'市场波动加剧，你会选择？',
		'突发利空消息，你会选择？',
		'资产暴涨，你会选择？',
		'行业政策变化，你会选择？',
		'朋友推荐新资产，你会选择？',
	],
	
	// Quiz Questions
	QUIZ_QUESTIONS: [
		{
			question: '分散投资的最大好处是什么？',
			options: ['降低风险', '增加波动', '提高单一资产收益'],
			answer: '降低风险',
		},
		{
			question: '什么是资产配置？',
			options: ['只买一种资产', '合理分配不同资产', '频繁买卖'],
			answer: '合理分配不同资产',
		},
		{
			question: '长期投资的好处是？',
			options: ['快速致富', '降低交易成本', '减少情绪影响'],
			answer: '减少情绪影响',
		},
	],
} as const;

// Asset Categories Configuration
export const ASSET_CATEGORIES = {
	TECH: 'tech',
	BOND: 'bond',
	COMMODITY: 'commodity',
	CRYPTO: 'crypto',
	ESG: 'esg',
	GOLD: 'gold',
	STABLECOIN: 'stablecoin',
	YIELD: 'yield',
} as const;

// Event Types Configuration
export const EVENT_TYPES = {
	STORM: 'storm',
	BULL_MARKET: 'bull_market',
	MIST: 'mist',
	AFTERSHOCK: 'aftershock',
	EASTER_EGG: 'easter_egg',
} as const;

// Badge Categories
export const BADGE_CATEGORIES = {
	DIVERSIFICATION: 'diversification',
	RISK_MANAGEMENT: 'risk-management',
	KNOWLEDGE: 'knowledge',
	ACHIEVEMENT: 'achievement',
} as const;

// Game Levels
export const GAME_LEVELS = {
	NOVICE: 'novice',
	SKILLED: 'skilled',
	EXPERT: 'expert',
	MASTER: 'master',
} as const;

// Level Experience Requirements
export const LEVEL_EXPERIENCE = {
	NOVICE: 0,
	SKILLED: 100,
	EXPERT: 500,
	MASTER: 1000,
} as const;
