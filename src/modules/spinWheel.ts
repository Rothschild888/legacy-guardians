import type { Dispatch, SetStateAction } from 'react';
import { SpinWheelOutcome } from '../types';

// Possible outcomes of the spin wheel mini-game
export const spinWheelOutcomes: SpinWheelOutcome[] = [
  {
    label: '收益+10%',
    color: '#27ae60',
    effect: (setReturns) => setReturns(r => (r !== null ? r + 10 : 10)),
  },
  {
    label: '收益-10%',
    color: '#e74c3c',
    effect: (setReturns) => setReturns(r => (r !== null ? r - 10 : -10)),
  },
  {
    label: '获得分散者徽章',
    color: '#00fff7',
    effect: (_, setBadges) => setBadges(b => (b.includes('分散者') ? b : [...b, '分散者'])),
  },
  {
    label: '风险提升',
    color: '#ff00cc',
    effect: (setReturns) => setReturns(r => (r !== null ? r - 5 : -5)),
  },
  {
    label: '知识大师徽章',
    color: '#f6d365',
    effect: (_, setBadges) => setBadges(b => (b.includes('知识大师') ? b : [...b, '知识大师'])),
  },
  {
    label: '无变化',
    color: '#888',
    effect: () => {},
  },
];

interface SpinWheelHandlers {
  setReturns: Dispatch<SetStateAction<number | null>>;
  setBadges: Dispatch<SetStateAction<string[]>>;
  setWheelResult: Dispatch<SetStateAction<string | null>>;
  setWheelUsed: Dispatch<SetStateAction<boolean>>;
  setWheelOpen: Dispatch<SetStateAction<boolean>>;
}

// Handle the spin wheel action
export const handleSpinWheel = ({
  setReturns,
  setBadges,
  setWheelResult,
  setWheelUsed,
  setWheelOpen,
}: SpinWheelHandlers) => {
  const idx = Math.floor(Math.random() * spinWheelOutcomes.length);
  const outcome = spinWheelOutcomes[idx];
  setWheelResult(outcome.label);
  outcome.effect(setReturns, setBadges);
  setWheelUsed(true);
  setTimeout(() => {
    setWheelOpen(false);
    setWheelResult(null);
  }, 1800);
};
