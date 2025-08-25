// Legacy Guardians - Game Logic Utilities

import { GameState, GameHistory, MarketEvent, Asset } from '../types';
import { GAME_CONFIG, BADGE_REQUIREMENTS } from '../constants/game-config';

/**
 * Calculate daily returns based on asset weights and market events
 */
export function calculateDailyReturns(
	weights: { [key: string]: number },
	assets: Asset[],
	event: MarketEvent | null
): number {
	let dailyReturn = 0;
	
	assets.forEach(asset => {
		let baseReturn = asset.expectedReturn;
		
		// Apply event impact if asset is affected
		if (event && event.affected.includes(asset.key)) {
			const range = event.impactRange[asset.key];
			if (Array.isArray(range) && range.length === 2) {
				const [min, max] = range;
				const impact = min + Math.random() * (max - min);
				baseReturn += impact;
			}
		}
		
		// Calculate weighted return
		dailyReturn += (weights[asset.key] / 100) * baseReturn;
	});
	
	return Number((dailyReturn * 100).toFixed(2));
}

/**
 * Check if player should receive new badges
 */
export function checkBadgeEligibility(
	weights: { [key: string]: number },
	history: GameHistory[],
	currentReturns: number,
	existingBadges: string[]
): string[] {
	const newBadges: string[] = [];
	
	// Check diversifier badge
	if (Object.values(weights).filter(w => w > 0).length >= BADGE_REQUIREMENTS.DIVERSIFIER) {
		if (!existingBadges.includes('分散者')) {
			newBadges.push('分散者');
		}
	}
	
	// Check long-term vision badge
	if (history.length >= 2 && 
		history.slice(-2).every(h => h.returns > 0) && 
		currentReturns > 0) {
		if (!existingBadges.includes('长远目光')) {
			newBadges.push('长远目光');
		}
	}
	
	// Check risk manager badge
	if (Object.values(weights).some(w => w > BADGE_REQUIREMENTS.RISK_MANAGER) && 
		currentReturns > 0) {
		if (!existingBadges.includes('风险管理者')) {
			newBadges.push('风险管理者');
		}
	}
	
	return newBadges;
}

/**
 * Calculate resource rewards based on returns
 */
export function calculateResourceRewards(returns: number): { coins: number; gems: number } {
	const coins = Math.max(0, Math.floor(returns * GAME_CONFIG.COIN_REWARD_RATIO));
	const gems = returns > GAME_CONFIG.GEM_REWARD_THRESHOLD ? 1 : 0;
	
	return { coins, gems };
}

/**
 * Check if game should end
 */
export function checkGameEnd(
	returns: number,
	badges: string[],
	maxBadges: number
): boolean {
	const wealthGoal = GAME_CONFIG.WEALTH_GOAL;
	const hasAllBadges = badges.length >= maxBadges;
	
	return returns >= wealthGoal && hasAllBadges;
}

/**
 * Generate random market event
 */
export function generateRandomEvent(events: MarketEvent[]): MarketEvent | null {
	if (Math.random() > GAME_CONFIG.DAILY_EVENT_PROBABILITY) {
		return null;
	}
	
	const eventIndex = Math.floor(Math.random() * events.length);
	return events[eventIndex];
}

/**
 * Generate random dilemma question
 */
export function generateRandomDilemma(
	questions: string[],
	askedQuestions: number[]
): string | null {
	if (Math.random() > GAME_CONFIG.DILEMMA_PROBABILITY) {
		return null;
	}
	
	const available = questions.map((_, i) => i).filter(i => !askedQuestions.includes(i));
	if (available.length === 0) {
		return null;
	}
	
	const randomIndex = available[Math.floor(Math.random() * available.length)];
	return questions[randomIndex];
}

/**
 * Generate random quiz question
 */
export function generateRandomQuiz(quizzes: any[]): any | null {
	if (Math.random() > GAME_CONFIG.QUIZ_PROBABILITY) {
		return null;
	}
	
	const randomIndex = Math.floor(Math.random() * quizzes.length);
	return quizzes[randomIndex];
}

/**
 * Check if easter egg should trigger
 */
export function checkEasterEgg(): boolean {
	return Math.random() < GAME_CONFIG.Easter_EGG_PROBABILITY;
}

/**
 * Calculate player level based on experience
 */
export function calculatePlayerLevel(experience: number): string {
	if (experience >= 1000) return 'master';
	if (experience >= 500) return 'expert';
	if (experience >= 100) return 'skilled';
	return 'novice';
}

/**
 * Validate asset allocation weights
 */
export function validateAssetWeights(weights: { [key: string]: number }): boolean {
	const total = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
	return Math.abs(total - GAME_CONFIG.TOTAL_WEIGHT) < 0.01; // Allow small floating point errors
}

/**
 * Get asset allocation summary
 */
export function getAssetAllocationSummary(weights: { [key: string]: number }): {
	total: number;
	distributed: number;
	concentration: number;
} {
	const total = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
	const distributed = Object.values(weights).filter(w => w > 0).length;
	const concentration = Math.max(...Object.values(weights));
	
	return { total, distributed, concentration };
}

/**
 * Calculate portfolio risk score
 */
export function calculateRiskScore(weights: { [key: string]: number }): number {
	const concentration = Math.max(...Object.values(weights));
	const diversification = Object.values(weights).filter(w => w > 0).length;
	
	// Higher concentration = higher risk, more diversification = lower risk
	let riskScore = concentration / 100; // 0-1 scale
	riskScore -= (diversification - 1) * 0.1; // Reduce risk for diversification
	riskScore = Math.max(0, Math.min(1, riskScore)); // Clamp to 0-1
	
	return Math.round(riskScore * 100); // Return as percentage
}
