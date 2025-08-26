import { describe, it, expect, vi } from 'vitest';
import { generateRandomEvent } from '../game-logic';
import type { MarketEvent } from '../../types';

describe('generateRandomEvent', () => {
  it('filters out events for disallowed assets', () => {
    const events: MarketEvent[] = [
      {
        id: 1,
        name: 'Tech event',
        description: '',
        affected: ['tech'],
        impactRange: { tech: [0, 0] },
        probability: 1,
      },
      {
        id: 2,
        name: 'Crypto event',
        description: '',
        affected: ['crypto'],
        impactRange: { crypto: [0, 0] },
        probability: 1,
      },
    ];
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const ev = generateRandomEvent(events, ['tech']);
    expect(ev?.id).toBe(1);
    vi.restoreAllMocks();
  });

  it('returns null when all events are disallowed', () => {
    const events: MarketEvent[] = [
      {
        id: 1,
        name: 'Crypto only',
        description: '',
        affected: ['crypto'],
        impactRange: { crypto: [0, 0] },
        probability: 1,
      },
    ];
    const ev = generateRandomEvent(events, []);
    expect(ev).toBeNull();
  });
});
