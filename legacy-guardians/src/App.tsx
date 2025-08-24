console.log('App loaded');
import React, { useState } from 'react';
// Stepwise UI state
const steps = ['task', 'assets', 'event', 'ai', 'badges', 'summary'];
import artifactsData from './artifacts.json';
import badgesData from './badges.json';
import aiPartnerData from './ai-partner.json';
import './legacy-ui.css';
import './legacy-cyberpunk.css';

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<Error | null>(null);
  if (error) {
    return <div style={{ color: 'red', padding: '2rem' }}>运行时错误: {error.message}</div>;
  }
  return (
    <React.Fragment>
      {React.Children.map(children, child => {
        try {
          return child;
        } catch (e: any) {
          setError(e);
          return null;
        }
      })}
    </React.Fragment>
  );
}
import assetsData from './data/assets.json';
import tasksData from './data/tasks.json';
import eventsData from './data/events.json';
// Add more event variety for richer gameplay
const extraEvents = [
  {
    id: 3,
    name: '科技牛市',
    affected: ['tech', 'crypto'],
    impactRange: { tech: [0.05, 0.15], crypto: [0.03, 0.10] },
    probability: 0.12,
    description: '科技股和加密货币迎来牛市，价格大幅上涨。'
  },
  {
    id: 4,
    name: '债券利好',
    affected: ['bond'],
    impactRange: { bond: [0.02, 0.08] },
    probability: 0.10,
    description: '债券市场利好，收益提升。'
  },
  {
    id: 5,
    name: '商品暴跌',
    affected: ['commodity'],
    impactRange: { commodity: [-0.15, -0.05] },
    probability: 0.09,
    description: '商品市场暴跌，注意分散风险。'
  },
  {
    id: 6,
    name: '加密波动',
    affected: ['crypto'],
    impactRange: { crypto: [-0.20, 0.20] },
    probability: 0.15,
    description: '加密货币剧烈波动，风险与机会并存。'
  }
];
const allEvents = [...eventsData, ...extraEvents];

const assetCategories = assetsData;

export default function App() {
  // Dilemma questions pool (no options in text)
  const dilemmaQuestions = [
    '市场波动加剧，你会选择？',
    '突发利空消息，你会选择？',
    '资产暴涨，你会选择？',
    '行业政策变化，你会选择？',
    '朋友推荐新资产，你会选择？'
  ];
  // Company/Avatar Customization
  const [companyName, setCompanyName] = useState('我的空岛公司');
  const [avatar, setAvatar] = useState('https://cdn-icons-png.flaticon.com/512/616/616494.png');
  const avatarOptions = [
    'https://cdn-icons-png.flaticon.com/512/616/616494.png',
    'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    'https://cdn-icons-png.flaticon.com/512/616/616430.png',
    'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    'https://cdn-icons-png.flaticon.com/512/616/616408.png'
  ];
  // Resource Management
  const [coins, setCoins] = useState(100);
  const [gems, setGems] = useState(5);
  // Visual Upgrades
  const [theme, setTheme] = useState('cyberpunk');
  // Spin the Wheel state
  const [wheelOpen, setWheelOpen] = useState(false);
  const [wheelResult, setWheelResult] = useState<string | null>(null);
  const [wheelUsed, setWheelUsed] = useState(false);
  function handleSpinWheel() {
    const outcomes = [
      { label: '收益+10%', effect: () => setReturns(r => (r !== null ? r + 10 : 10)), color: '#27ae60' },
      { label: '收益-10%', effect: () => setReturns(r => (r !== null ? r - 10 : -10)), color: '#e74c3c' },
      { label: '获得分散者徽章', effect: () => setBadges(b => b.includes('分散者') ? b : [...b, '分散者']), color: '#00fff7' },
      { label: '风险提升', effect: () => setReturns(r => (r !== null ? r - 5 : -5)), color: '#ff00cc' },
      { label: '知识大师徽章', effect: () => setBadges(b => b.includes('知识大师') ? b : [...b, '知识大师']), color: '#f6d365' },
      { label: '无变化', effect: () => {}, color: '#888' }
    ];
    const idx = Math.floor(Math.random() * outcomes.length);
    setWheelResult(outcomes[idx].label);
    outcomes[idx].effect();
    setWheelUsed(true);
    setTimeout(() => { setWheelOpen(false); setWheelResult(null); }, 1800);
  }
  // All misplaced JSX elements will be moved into the return statement below
  // AI chat state
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  // Advanced AI chat logic: ChatGPT API integration (placeholder)
  async function handleAiAsk() {
    const input = aiInput.trim();
    if (!input) return;
    setAiResponse('正在思考...');
    // Simulate ChatGPT API call
    setTimeout(() => {
      // Replace this with actual API call to ChatGPT
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
  }
  // Dilemma/Quiz state
  const [dilemma, setDilemma] = useState<string | null>(null);
  const [quiz, setQuiz] = useState<{ question: string, options: string[], answer: string } | null>(null);
  const [quizAnswered, setQuizAnswered] = useState<string | null>(null);
  // Main game state
  const [endgame, setEndgame] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [history, setHistory] = useState<any[]>([]);
  // Track asked dilemmas to avoid repeats
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
  const [quizResult, setQuizResult] = useState<string>('');
  // Reset game function
  const resetGame = () => {
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
  };

  const handleChange = (key: string, value: number) => {
    const total = Object.entries(weights).reduce((sum, [k, v]) => k === key ? sum + value : sum + (v as number), 0);
    if (total <= 100) {
      setWeights({ ...weights, [key]: value });
    }
  };

  // Simulate market and event impact
  const nextDay = () => {
    // Fun event: meme or surprise
    if (Math.random() < 0.15) {
      setShowModal(true);
      setModalContent('🎉 彩蛋事件：你发现了一只会跳舞的柴犬！\n\n奖励：收益+5%，心情+100！');
      setReturns(r => (r !== null ? r + 5 : 5));
      setCoins(c => c + 10); // 奖励金币
      setGems(g => g + 1); // 奖励宝石
    }
    setWheelUsed(false); // Reset wheel usage for new day
    // Randomly trigger a dilemma or quiz
    if (Math.random() < 0.4) {
      // Filter out already asked dilemmas
      const available = dilemmaQuestions.map((q, i) => i).filter(i => !askedDilemmas.includes(i));
      if (available.length > 0) {
        const idx = available[Math.floor(Math.random() * available.length)];
        setDilemma(dilemmaQuestions[idx]);
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
    // Endgame trigger: wealth x3, 5 badges, 大师等级 (simulate)
    const wealthGoal = 300;
    const allBadges = badgesData.map(b => b.name.replace('徽章',''));
    const hasAllBadges = allBadges.every(b => badges.includes(b));
    if (returns !== null && returns >= wealthGoal && hasAllBadges) {
      setEndgame(true);
      setTimeout(() => setShowSummary(true), 2500);
      return;
    }
    // Pick a random event
    const eventIdx = Math.floor(Math.random() * allEvents.length);
    const ev = allEvents[eventIdx];
    setEvent(ev);
    // Pick next task
    const taskIdx = (day + 1) % tasksData.length;
    setTask(tasksData[taskIdx]);
    setDay(day + 1);
    // Calculate returns
    let dailyReturn = 0;
    assetCategories.forEach(asset => {
      let base = asset.expectedReturn;
      // Apply event impact if affected and impactRange exists
      if (ev.affected.includes(asset.key)) {
        const range = (ev.impactRange as any)[asset.key];
        if (Array.isArray(range) && range.length === 2 && typeof range[0] === 'number' && typeof range[1] === 'number') {
          const [min, max] = range;
          const impact = min + Math.random() * (max - min);
          base += impact;
        }
      }
      dailyReturn += (weights[asset.key] / 100) * base;
    });
    const dayReturn = Number((dailyReturn * 100).toFixed(2));
    setReturns(dayReturn);
    // Update coins/gems based on returns
    setCoins(c => c + Math.max(0, Math.floor(dayReturn / 10)));
    if (dayReturn > 50) setGems(g => g + 1);
    // Badge logic
    let newBadges = [...badges];
    // 分散者徽章: 持有4种资产
    if (Object.values(weights).filter((w) => (w as number) > 0).length >= 4 && !badges.includes('分散者')) {
      newBadges.push('分散者');
    }
    // 长远目光徽章: 连续3天资产净值增长
    if (history.length >= 2 && history.slice(-2).every(h => h.returns > 0) && dayReturn > 0 && !badges.includes('长远目光')) {
      newBadges.push('长远目光');
    }
    // 风险管理者徽章: 高风险仓位理性止盈
    if (Object.values(weights).some(w => w > 60) && dayReturn > 0 && !badges.includes('风险管理者')) {
      newBadges.push('风险管理者');
    }
    setBadges(newBadges);
    // Track history
    setHistory([...history, { day: day + 1, weights: { ...weights }, event: ev, returns: dayReturn }]);
  };

  // Helper to extract options from dilemma question
  function getDilemmaOptions(q: string) {
  // Always return default options for dilemmas
  return ['A. 坚持长期持有', 'B. 立即止损', 'C. 增加投资'];
  }

  return (
    <ErrorBoundary>
      <div className="legacy-container" style={{ paddingTop: 0, maxWidth: '1200px', margin: '2rem auto' }}>
        {/* Company/Avatar Customization Modal Button */}
  <button style={{ position: 'fixed', top: 32, right: 32, zIndex: 1000, background: '#f6d365', color: '#222', borderRadius: '50%', width: 60, height: 60, fontSize: 28, fontWeight: 900, boxShadow: '0 0 16px #f6d365cc', border: 'none', cursor: 'pointer' }} onClick={() => { setShowModal(true); setModalContent('edit'); setPendingCompanyName(companyName); }} title="编辑公司信息">⚙️</button>
        {/* Company/Avatar Customization Modal */}
  {showModal && modalContent === 'edit' && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#fff', color: '#222', borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 480, boxShadow: '0 0 32px #f6d365cc', position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ position: 'absolute', top: 12, right: 18, fontSize: 22, cursor: 'pointer', color: '#e67e22' }} onClick={() => setShowModal(false)}>×</span>
          <h2 style={{ color: '#e67e22', marginBottom: 16 }}>{companyName ? '编辑公司信息' : '注册公司'}</h2>
              <label style={{ fontWeight: 700, marginBottom: 8 }}>公司名称：</label>
              <input type="text" value={pendingCompanyName} onChange={e => setPendingCompanyName(e.target.value)} style={{ padding: '0.7rem 1rem', borderRadius: 8, border: '1px solid #e67e22', fontSize: 16, marginBottom: 8, background: '#f6d36522', color: '#222' }} autoFocus />
              <label style={{ fontWeight: 700, marginBottom: 8 }}>选择头像：</label>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                {avatarOptions.map(url => (
                  <img key={url} src={url} alt="avatar" style={{ width: 48, height: 48, borderRadius: '50%', border: avatar === url ? '3px solid #e67e22' : '2px solid #ccc', cursor: 'pointer', boxShadow: avatar === url ? '0 0 8px #e67e22' : 'none' }} onClick={() => setAvatar(url)} />
                ))}
              </div>
              <label style={{ fontWeight: 700, marginBottom: 8 }}>主题风格：</label>
              <select value={theme} onChange={e => setTheme(e.target.value)} style={{ padding: '0.7rem 1rem', borderRadius: 8, border: '1px solid #e67e22', fontSize: 16, marginBottom: 8, background: '#f6d36522', color: '#222' }}>
                <option value="cyberpunk">赛博朋克</option>
                <option value="classic">经典</option>
                <option value="meme">搞笑</option>
              </select>
              <button className="legacy-btn" style={{ background: '#e67e22', color: '#fff', marginTop: 12 }} onClick={() => setShowModal(false)}>取消</button>
              {companyName ? (
                <button className="legacy-btn" style={{ background: '#00fff7', color: '#222', marginTop: 12 }} onClick={() => { setCompanyName(pendingCompanyName); setShowModal(false); }}>保存</button>
              ) : (
                <button className="legacy-btn" style={{ background: '#00fff7', color: '#222', marginTop: 12 }} onClick={() => { setCompanyName(pendingCompanyName); setShowModal(false); }}>注册</button>
              )}
            </div>
          </div>
        )}
        {/* Spin the Wheel Floating Button */}
        <button style={{ position: 'fixed', bottom: 110, right: 32, zIndex: 1000, background: '#ff00cc', color: '#fff', borderRadius: '50%', width: 60, height: 60, fontSize: 28, fontWeight: 900, boxShadow: '0 0 16px #ff00ccbb', border: 'none', cursor: wheelUsed ? 'not-allowed' : 'pointer', opacity: wheelUsed ? 0.5 : 1 }} onClick={() => !wheelUsed && setWheelOpen(true)} title="每日转盘" disabled={wheelUsed}>🎡</button>
        {/* Spin the Wheel Modal */}
        {wheelOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#222', color: '#fff', borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 480, boxShadow: '0 0 32px #ff00ccbb', position: 'relative', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
              <span style={{ position: 'absolute', top: 12, right: 18, fontSize: 22, cursor: 'pointer', color: '#ff00cc' }} onClick={() => { setWheelOpen(false); setWheelResult(null); }}>×</span>
              <h2 style={{ color: '#ff00cc', marginBottom: 16 }}>每日转盘</h2>
              <div style={{ fontSize: 18, marginBottom: 24 }}>点击转盘，获得随机奖励或惩罚！每天限一次。</div>
              <button className="legacy-btn" style={{ fontSize: 22, padding: '0.7rem 2.5rem', marginBottom: 12 }} onClick={handleSpinWheel} disabled={wheelResult !== null}>🎡 Spin!</button>
              {wheelResult && (
                <div style={{ marginTop: 18, color: '#fff', fontWeight: 700, fontSize: 20, textShadow: '0 0 8px #ff00cc' }}>{wheelResult}</div>
              )}
            </div>
          </div>
        )}
        {/* AI Chat Floating Button */}
        <button style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1000, background: '#00fff7', color: '#222', borderRadius: '50%', width: 60, height: 60, fontSize: 28, fontWeight: 900, boxShadow: '0 0 16px #00fff7cc', border: 'none', cursor: 'pointer' }} onClick={() => setAiChatOpen(true)} title="向AI伙伴提问">💬</button>
        {/* AI Chat Modal */}
        {aiChatOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#222', color: '#fff', borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 480, boxShadow: '0 0 32px #00fff7cc', position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ position: 'absolute', top: 12, right: 18, fontSize: 22, cursor: 'pointer', color: '#ff00cc' }} onClick={() => { setAiChatOpen(false); setAiInput(''); setAiResponse(''); }}>×</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <img src={aiPartnerData.avatar} alt="AI Partner" style={{ width: 36, height: 36, borderRadius: '50%', boxShadow: '0 0 8px #00fff7' }} />
                <span style={{ fontWeight: 700, color: '#00fff7' }}>{aiPartnerData.name}</span>
              </div>
              <div style={{ fontSize: 16, marginBottom: 8 }}>你可以向AI伙伴提问任何金融相关问题。</div>
              <input type="text" value={aiInput} onChange={e => setAiInput(e.target.value)} placeholder="请输入你的问题..." style={{ padding: '0.7rem 1rem', borderRadius: 8, border: '1px solid #00fff7', fontSize: 16, marginBottom: 8, background: '#111', color: '#fff' }} />
              <button className="legacy-btn" style={{ marginBottom: 8 }} onClick={handleAiAsk}>发送</button>
              {aiResponse && (
                <div style={{ background: '#333', color: '#00fff7', borderRadius: 8, padding: 12, fontSize: 16, marginTop: 8 }}>{aiResponse}</div>
              )}
            </div>
          </div>
        )}
        {/* Sticky Top Bar with Company/Avatar/Resources */}
        <div style={{ position: 'sticky', top: 0, zIndex: 10, background: theme === 'cyberpunk' ? 'rgba(20,20,40,0.98)' : theme === 'classic' ? '#fff' : '#f6d365', borderBottom: '2px solid #00fff7', padding: '0.8rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img src={avatar} alt="avatar" style={{ width: 40, height: 40, borderRadius: '50%', boxShadow: '0 0 8px #e67e22' }} />
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: theme === 'cyberpunk' ? '#00fff7' : theme === 'classic' ? '#222' : '#e67e22' }}>{companyName}</span>
          </div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#00fff7' }}>守护者之星：{badges.length}/5</div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ff00cc' }}>财富目标：300%</div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>第 {day + 1} 天</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ background: '#f6d365', color: '#222', borderRadius: 8, padding: '0.3em 1em', fontWeight: 700 }}>💰 {coins}</span>
            <span style={{ background: '#ff00cc', color: '#fff', borderRadius: 8, padding: '0.3em 1em', fontWeight: 700 }}>💎 {gems}</span>
          </div>
        </div>
        {/* Engagement overlays: Dilemma/Quiz */}
        {dilemma && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.8)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#222', color: '#fff', borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 480, boxShadow: '0 0 32px #00fff7cc', position: 'relative' }}>
              <h2 style={{ color: '#ff00cc', marginBottom: 16 }}>决策时刻</h2>
              <div style={{ fontSize: 18, marginBottom: 24 }}>{dilemma}</div>
              <div style={{ display: 'flex', gap: 16 }}>
                {getDilemmaOptions(dilemma).map((opt, idx) => (
                  <button className="legacy-btn" key={opt+idx} onClick={() => { setDilemma(null); nextDay(); }}>{opt}</button>
                ))}
              </div>
            </div>
          </div>
        )}
        {quiz && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.8)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#222', color: '#fff', borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 480, boxShadow: '0 0 32px #00fff7cc', position: 'relative' }}>
              <h2 style={{ color: '#00fff7', marginBottom: 16 }}>金融知识小测验</h2>
              <div style={{ fontSize: 18, marginBottom: 24 }}>{quiz.question}</div>
              <div style={{ display: 'flex', gap: 16 }}>
                {quiz.options.map(opt => (
                  <button className="legacy-btn" key={opt} onClick={() => { setQuizAnswered(opt); setTimeout(() => { setQuiz(null); setQuizAnswered(null); nextDay(); }, 1200); }}>{opt}</button>
                ))}
              </div>
              {quizAnswered && (
                <div style={{ marginTop: 18, color: quizAnswered === quiz.answer ? '#27ae60' : '#e74c3c', fontWeight: 700 }}>
                  {quizAnswered === quiz.answer ? '回答正确！获得知识大师徽章！' : '回答错误，再接再厉！'}
                </div>
              )}
            </div>
          </div>
        )}
        {/* Endgame overlays remain unchanged */}
        {endgame && !showSummary && (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)', zIndex: 99, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" alt="victory" style={{ width: 180, height: 180, marginBottom: 24 }} />
            <h2 style={{ color: '#00fff7', fontSize: '2rem', textShadow: '0 0 16px #ff00cc' }}>传奇空岛重启成功！</h2>
            <div style={{ color: '#fff', marginTop: 12 }}>你已收集全部神器徽章，财富目标达成，成功渡过终极经济风暴！</div>
          </div>
        )}
        {showSummary && (
          (() => {
            const allBadges = badgesData.map(b => b.name.replace('徽章',''));
            return (
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.95)', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
                <h2 style={{ color: '#ff00cc', fontSize: '2rem', marginBottom: 16 }}>冒险总结</h2>
                <div style={{ color: '#fff', fontSize: '1.2rem', marginBottom: 16 }}>
                  <div>累计收益：{returns}%</div>
                  <div>获得徽章：{badges.filter(b => allBadges.includes(b)).join('、')}</div>
                  <div>教育收获：分散投资、长期主义、风险管理、冷静应对市场波动</div>
                </div>
                <button className="legacy-btn" onClick={() => { setShowSummary(false); setEndgame(false); resetGame(); }}>再玩一次</button>
              </div>
            );
          })()
        )}
        {/* 3-Column Layout: Sidebar | Main | History */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'nowrap', marginBottom: '2rem' }}>
          {/* Sidebar: Stats, Badges, AI Partner */}
          <div style={{ flex: 0.7, minWidth: 220, display: 'flex', flexDirection: 'column', gap: '1.2rem', background: 'rgba(30,30,60,0.95)', borderRadius: 12, boxShadow: '0 0 16px #ff00cc55', padding: '1rem' }}>
            <div>
              <h2 style={{ color: '#00fff7', fontSize: '1.1rem', marginBottom: 8 }}>AI 伙伴</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img src={aiPartnerData.avatar} alt="AI Partner" style={{ width: 36, height: 36, borderRadius: '50%', boxShadow: '0 0 8px #00fff7' }} />
                <span style={{ color: '#fff', fontWeight: 700 }}>{aiPartnerData.name}</span>
              </div>
              <div style={{ color: '#fff', fontSize: '0.95rem', marginTop: 8 }}>
                {(() => {
                  if (history.length === 0) return '欢迎来到空岛守护者，分散配置，理性投资！';
                  const last = history[history.length - 1];
                  if (last.returns < 0) return aiPartnerData.feedbackTemplates[4];
                  if (badges.length > 0) return aiPartnerData.feedbackTemplates[5].replace('{badge}', badges[badges.length - 1]);
                  return aiPartnerData.feedbackTemplates[0].replace('{asset}', '资产').replace('{percent}', '分散');
                })()}
              </div>
            </div>
            <div>
              <h2 style={{ color: '#e67e22', fontSize: '1.1rem', marginBottom: 8 }}>成就徽章</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {badgesData.map(badgeObj => (
                  <span key={badgeObj.key} className={`legacy-badge${badges.includes(badgeObj.name.replace('徽章','')) ? '' : ' locked'}`} title={badgeObj.desc} onClick={() => { setShowModal(true); setModalContent(`${badgeObj.name}\n\n${badgeObj.desc}`); }} style={{ cursor: 'pointer' }}>
                    {badgeObj.name} {badges.includes(badgeObj.name.replace('徽章','')) ? '✔️' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Main Game Area: Task, Asset Allocation, Event, Returns, Next Day */}
          <div style={{ flex: 1.2, minWidth: 340, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <>
              <div style={{ display: 'flex', gap: '1.2rem' }}>
                <div className="legacy-card" style={{ flex: 1 }}>
                  <h2 className="legacy-task">任务卡</h2>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>{task.title}</div>
                  <div style={{ marginBottom: 4 }}>{task.background}</div>
                  <div style={{ color: '#888', fontSize: '0.95rem' }}>{task.tip}</div>
                </div>
                <div className="legacy-card" style={{ flex: 1 }}>
                  <h2 className="legacy-event">市场事件</h2>
                  {event ? (
                    <div>
                      <strong>{event.name}</strong>: {event.description}
                      {/* Animated event effect overlay */}
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
                        {event.name.includes('风暴') && (
                          <img src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" alt="storm" style={{ width: '100%', height: '100%', opacity: 0.15, objectFit: 'cover' }} />
                        )}
                        {event.name.includes('牛市') && (
                          <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="bull" style={{ width: '100%', height: '100%', opacity: 0.15, objectFit: 'cover' }} />
                        )}
                      </div>
                      {/* Event choices (for advanced events) */}
                      {event.choices && Array.isArray(event.choices) && (
                        <div style={{ marginTop: 12 }}>
                          {event.choices.map((choice: string) => (
                            <button key={choice} className="legacy-btn" style={{ marginRight: 8 }} onClick={() => nextDay()}>{choice}</button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : <div style={{ color: '#888' }}>暂无事件</div>}
                </div>
              </div>
              <div className="legacy-card">
                <h2 className="legacy-progress">资产分配</h2>
                <div style={{ display: 'flex', gap: '1.2rem' }}>
                  {artifactsData.map(artifact => (
                    <div key={artifact.key} style={{ flex: 1, background: artifact.theme === 'forest' ? 'rgba(0,255,247,0.10)' : artifact.theme === 'snow' ? 'rgba(0,234,255,0.10)' : artifact.theme === 'volcano' ? 'rgba(255,111,0,0.10)' : 'rgba(255,0,204,0.10)', borderRadius: 12, padding: '1rem', position: 'relative', boxShadow: '0 2px 8px #00fff733', minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ fontSize: '2rem', marginRight: 12 }}>{artifact.icon}</span>
                        <label style={{ fontWeight: 700, fontSize: '1.1rem', flex: 1 }}>{artifact.name}: <strong>{weights[artifact.key]}%</strong></label>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={weights[artifact.key]}
                        onChange={e => handleChange(artifact.key, Number(e.target.value))}
                        className="legacy-slider"
                        style={{ marginBottom: 8 }}
                      />
                      {/* Risk meter bar */}
                      <div style={{ height: 10, borderRadius: 5, background: '#222', margin: '8px 0', boxShadow: '0 0 4px #ff00cc99', overflow: 'hidden' }}>
                        <div style={{ width: `${Math.min(weights[artifact.key],100)}%`, height: '100%', borderRadius: 5, background: weights[artifact.key] > 60 ? '#ff00cc' : '#00fff7', transition: 'width 0.3s' }}></div>
                      </div>
                      {/* Mini chart clickable */}
                      <div
                        style={{ height: 36, background: 'linear-gradient(90deg, #222, #444)', borderRadius: 6, marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00fff7', fontSize: 13, cursor: 'pointer', boxShadow: '0 0 6px #00fff799' }}
                        title={`点击查看${artifact.name}详情`}
                        onClick={() => { setShowModal(true); setModalContent(`${artifact.name}（${artifact.icon}）\n\n权重: ${weights[artifact.key]}%\n\n此资产代表：${artifact.theme === 'forest' ? '科技股' : artifact.theme === 'snow' ? '债券' : artifact.theme === 'volcano' ? '商品' : '加密货币'}\n\n风险提示: ${weights[artifact.key] > 60 ? '集中风险' : '分散配置'}`); }}>
                        <span>点击查看 Mini Chart</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 8, color: '#888' }}>总分配: <strong>{Object.values(weights).reduce((a, b) => (a as number) + (b as number), 0)}%</strong></div>
              </div>
              <div className="legacy-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h2 style={{ fontSize: '1.1rem', color: '#34495e' }}>当日收益</h2>
                  <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>{returns !== null ? `${returns}%` : '请点击“下一天”模拟收益'}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <button className="legacy-btn" style={{ marginTop: 0 }} onClick={nextDay}>下一天</button>
                  <button className="legacy-btn legacy-reset" style={{ marginTop: 0 }} onClick={resetGame}>重置游戏</button>
                </div>
              </div>
            </>
          </div>
        </div>
        {/* Modal for details */}
        {showModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowModal(false)}>
            <div style={{ background: '#222', color: '#fff', borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 480, boxShadow: '0 0 32px #00fff7cc', position: 'relative' }}>
              <span style={{ position: 'absolute', top: 12, right: 18, fontSize: 22, cursor: 'pointer', color: '#ff00cc' }} onClick={() => setShowModal(false)}>×</span>
              <pre style={{ whiteSpace: 'pre-wrap', fontSize: 16 }}>{modalContent}</pre>
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
