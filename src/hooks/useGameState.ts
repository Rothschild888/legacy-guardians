// Legacy Guardians - Game State Hook

import { useState, useCallback } from 'react';
import tasksData from '../constants/tasks.json';
import { events as eventsData } from '../modules/events';
import { badges as badgeData } from '../modules/badges';
import { dilemmas as dilemmaQuestions } from '../modules/dilemmas';
import { handleSpinWheel as spinWheel } from '../modules/spinWheel';

export const useGameState = () => {
  // Company/Avatar Customization
  const [companyName, setCompanyName] = useState('我的空岛公司');
  const [avatar, setAvatar] = useState('https://cdn-icons-png.flaticon.com/512/616/616494.png');
  const [theme, setTheme] = useState('cyberpunk');

  // Resource Management
  const [coins, setCoins] = useState(100);
  const [gems, setGems] = useState(5);

  // Spin the Wheel state
  const [wheelOpen, setWheelOpen] = useState(false);
  const [wheelResult, setWheelResult] = useState<string | null>(null);
  const [wheelUsed, setWheelUsed] = useState(false);

  // AI chat state
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  // Dilemma/Quiz state
  const [dilemma, setDilemma] = useState<string | null>(null);
  const [quiz, setQuiz] = useState<{ question: string, options: string[], answer: string } | null>(null);
  const [quizAnswered, setQuizAnswered] = useState<string | null>(null);

  // Main game state
  const [endgame, setEndgame] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [history, setHistory] = useState<any[]>([]);
  const [askedDilemmas, setAskedDilemmas] = useState<number[]>([]);
  const [weights, setWeights] = useState<{ [key: string]: number }>({ tech: 25, bond: 25, commodity: 25, crypto: 25 });
  const [day, setDay] = useState(0);
  const [returns, setReturns] = useState<number | null>(null);
  const [event, setEvent] = useState<any>(null);
  const [task, setTask] = useState<any>(tasksData[0]);
  const [badges, setBadges] = useState<string[]>([]);

  // Sidebar/modal state
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');
  const [pendingCompanyName, setPendingCompanyName] = useState(companyName);

  // Quiz state
  const [quizActive, setQuizActive] = useState(false);
  const [quizResult, setQuizResult] = useState('');

  // Avatar options
  const avatarOptions = [
    'https://cdn-icons-png.flaticon.com/512/616/616494.png',
    'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    'https://cdn-icons-png.flaticon.com/512/616/616430.png',
    'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    'https://cdn-icons-png/flaticon.com/512/616/616408.png',
    'https://cdn-icons-png.flaticon.com/512/616/616408.png'
  ];


  // Handle spin wheel
  const handleSpinWheel = useCallback(() => {
    spinWheel({
      setReturns,
      setBadges,
      setWheelResult,
      setWheelUsed,
      setWheelOpen,
    });
  }, [setReturns, setBadges, setWheelResult, setWheelUsed, setWheelOpen]);

  // Handle AI ask
  const handleAiAsk = useCallback(async () => {
    const input = aiInput.trim();
    if (!input) return;
    setAiResponse('正在思考...');
    
    setTimeout(() => {
      const funnyReplies = [
        '你问得太专业了，我得查查我的数据库！',
        '投资就像玩游戏，记得多收集徽章哦！',
        '如果市场下跌，不如喝杯奶茶冷静一下？',
        '分散投资，财富自由，顺便多吃点薯片！',
        '你是空岛最强守护者，继续冲鸭！',
        'AI也有点懵，建议你问ChatGPT！',
        '投资有风险，游戏更有趣！',
        '如果你赢了，记得截图发朋友圈！',
        '财富密码：多玩几天，解锁彩蛋！',
        '我猜你会选A，但B也不错！',
        '市场风暴来袭，快用你的神器！',
        '你问的问题让我想起了猫猫狗狗。',
        '投资路上，记得保持微笑😄！'
      ];
      setAiResponse(funnyReplies[Math.floor(Math.random() * funnyReplies.length)]);
    }, 1200);
  }, [aiInput]);

  // Reset game function
  const resetGame = useCallback(() => {
    setWeights({ tech: 25, bond: 25, commodity: 25, crypto: 25 });
    setDay(0);
    setReturns(null);
    setEvent(null);
    setTask(tasksData[0]);
    setBadges([]);
    setHistory([]);
    setQuizActive(false);
    setQuizResult('');
    setCoins(100);
    setGems(5);
    setEndgame(false);
    setShowSummary(false);
  }, []);

  // Handle weight change
  const handleWeightChange = useCallback((key: string, value: number) => {
    const total = Object.entries(weights).reduce((sum, [k, v]) => 
      k === key ? sum + value : sum + (v as number), 0
    );
    if (total <= 100) {
      setWeights({ ...weights, [key]: value });
    }
  }, [weights]);

  // Next day function
  const nextDay = useCallback(() => {
    // Fun event: meme or surprise
    if (Math.random() < 0.15) {
      setShowModal(true);
      setModalContent('🎉 彩蛋事件：你发现了一只会跳舞的柴犬！\n\n奖励：收益+5%，心情+100！');
      setReturns(r => (r !== null ? r + 5 : 5));
      setCoins(c => c + 10);
      setGems(g => g + 1);
    }

    setWheelUsed(false);

    // Randomly trigger a dilemma or quiz
    if (Math.random() < 0.4) {
      const available = dilemmaQuestions.map((_, i) => i).filter(i => !askedDilemmas.includes(i));
      if (available.length > 0) {
        const idx = available[Math.floor(Math.random() * available.length)];
        setDilemma(dilemmaQuestions[idx].text);
        setAskedDilemmas(prev => [...prev, idx]);
        return;
      }
    }

    if (Math.random() < 0.2) {
      setQuiz({
        question: '分散投资的最大好处是什么？',
        options: ['降低风险', '增加波动', '提高单一资产收益'],
        answer: '降低风险'
      });
      return;
    }

    // Endgame trigger
    const wealthGoal = 300;
    const allBadges = badgeData.map(b => b.name.replace('徽章',''));
    const hasAllBadges = allBadges.every(b => badges.includes(b));
    if (returns !== null && returns >= wealthGoal && hasAllBadges) {
      setEndgame(true);
      setTimeout(() => setShowSummary(true), 2500);
      return;
    }

    // Pick a random event
    const eventIdx = Math.floor(Math.random() * eventsData.length);
    const ev = eventsData[eventIdx];
    setEvent(ev);

    // Pick next task
    const taskIdx = (day + 1) % tasksData.length;
    setTask(tasksData[taskIdx]);
    setDay(day + 1);

    // Calculate returns (simplified for now)
    let dailyReturn = 0;
    // This would need the actual asset data to calculate properly
    dailyReturn = Math.random() * 20 - 10; // Random return between -10% and +10%
    
    const dayReturn = Number((dailyReturn * 100).toFixed(2));
    setReturns(dayReturn);

    // Update coins/gems based on returns
    setCoins(c => c + Math.max(0, Math.floor(dayReturn / 10)));
    if (dayReturn > 50) setGems(g => g + 1);

    // Badge logic
    let newBadges = [...badges];
    if (Object.values(weights).filter((w) => (w as number) > 0).length >= 4 && !badges.includes('分散者')) {
      newBadges.push('分散者');
    }
    if (history.length >= 2 && history.slice(-2).every(h => h.returns > 0) && dayReturn > 0 && !badges.includes('长远目光')) {
      newBadges.push('长远目光');
    }
    if (Object.values(weights).some(w => w > 60) && dayReturn > 0 && !badges.includes('风险管理者')) {
      newBadges.push('风险管理者');
    }
    setBadges(newBadges);

    // Track history
    setHistory([...history, { day: day + 1, weights: { ...weights }, event: ev, returns: dayReturn }]);
  }, [day, returns, badges, weights, history, askedDilemmas]);

  return {
    // State
    companyName,
    avatar,
    theme,
    coins,
    gems,
    wheelOpen,
    wheelResult,
    wheelUsed,
    aiChatOpen,
    aiInput,
    aiResponse,
    dilemma,
    quiz,
    quizAnswered,
    endgame,
    showSummary,
    history,
    weights,
    day,
    returns,
    event,
    task,
    badges,
    showModal,
    modalContent,
    pendingCompanyName,
    quizActive,
    quizResult,
    
    // Options
    avatarOptions,
    dilemmaQuestions,
    
    // Actions
    setCompanyName,
    setAvatar,
    setTheme,
    setCoins,
    setGems,
    setWheelOpen,
    setWheelResult,
    setWheelUsed,
    setAiChatOpen,
    setAiInput,
    setAiResponse,
    setDilemma,
    setQuiz,
    setQuizAnswered,
    setEndgame,
    setShowSummary,
    setHistory,
    setWeights,
    setDay,
    setReturns,
    setEvent,
    setTask,
    setBadges,
    setShowModal,
    setModalContent,
    setPendingCompanyName,
    setQuizActive,
    setQuizResult,
    
    // Functions
    handleSpinWheel,
    handleAiAsk,
    resetGame,
    handleWeightChange,
    nextDay
  };
};
