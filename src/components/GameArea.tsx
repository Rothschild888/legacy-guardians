import React from 'react';

interface GameAreaProps {
  task: any;
  event: any;
  artifactsData: any[];
  weights: { [key: string]: number };
  returns: number | null;
  onWeightChange: (key: string, value: number) => void;
  onNextDay: () => void;
  onResetGame: () => void;
  onShowModal: (content: string) => void;
}

export const GameArea: React.FC<GameAreaProps> = ({
  task,
  event,
  artifactsData,
  weights,
  returns,
  onWeightChange,
  onNextDay,
  onResetGame,
  onShowModal
}) => {
  const handleChange = (key: string, value: number) => {
    const total = Object.entries(weights).reduce((sum, [k, v]) => 
      k === key ? sum + value : sum + (v as number), 0
    );
    if (total <= 100) {
      onWeightChange(key, value);
    }
  };

  return (
    <div style={{ flex: 1.2, minWidth: 340, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      {/* Task and Event Cards */}
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
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                pointerEvents: 'none', 
                zIndex: 0 
              }}>
                {event.name.includes('风暴') && (
                  <img 
                    src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" 
                    alt="storm" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      opacity: 0.15, 
                      objectFit: 'cover' 
                    }} 
                  />
                )}
                {event.name.includes('牛市') && (
                  <img 
                    src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" 
                    alt="bull" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      opacity: 0.15, 
                      objectFit: 'cover' 
                    }} 
                  />
                )}
              </div>
              {/* Event choices (for advanced events) */}
              {event.choices && Array.isArray(event.choices) && (
                <div style={{ marginTop: 12 }}>
                  {event.choices.map((choice: string) => (
                    <button 
                      key={choice} 
                      className="legacy-btn" 
                      style={{ marginRight: 8 }} 
                      onClick={onNextDay}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div style={{ color: '#888' }}>暂无事件</div>
          )}
        </div>
      </div>

      {/* Asset Allocation */}
      <div className="legacy-card">
        <h2 className="legacy-progress">资产分配</h2>
        <div style={{ display: 'flex', gap: '1.2rem' }}>
          {artifactsData.map(artifact => (
            <div 
              key={artifact.key} 
              style={{ 
                flex: 1, 
                background: artifact.theme === 'forest' ? 'rgba(0,255,247,0.10)' : 
                           artifact.theme === 'snow' ? 'rgba(0,234,255,0.10)' : 
                           artifact.theme === 'volcano' ? 'rgba(255,111,0,0.10)' : 
                           'rgba(255,0,204,0.10)', 
                borderRadius: 12, 
                padding: '1rem', 
                position: 'relative', 
                boxShadow: '0 2px 8px #00fff733', 
                minWidth: 0 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: '2rem', marginRight: 12 }}>{artifact.icon}</span>
                <label style={{ fontWeight: 700, fontSize: '1.1rem', flex: 1 }}>
                  {artifact.name}: <strong>{weights[artifact.key]}%</strong>
                </label>
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
              <div style={{ 
                height: 10, 
                borderRadius: 5, 
                background: '#222', 
                margin: '8px 0', 
                boxShadow: '0 0 4px #ff00cc99', 
                overflow: 'hidden' 
              }}>
                <div style={{ 
                  width: `${Math.min(weights[artifact.key],100)}%`, 
                  height: '100%', 
                  borderRadius: 5, 
                  background: weights[artifact.key] > 60 ? '#ff00cc' : '#00fff7', 
                  transition: 'width 0.3s' 
                }}></div>
              </div>
              {/* Mini chart clickable */}
              <div
                style={{ 
                  height: 36, 
                  background: 'linear-gradient(90deg, #222, #444)', 
                  borderRadius: 6, 
                  marginBottom: 4, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#00fff7', 
                  fontSize: 13, 
                  cursor: 'pointer', 
                  boxShadow: '0 0 6px #00fff799' 
                }}
                title={`点击查看${artifact.name}详情`}
                onClick={() => {
                  onShowModal(`${artifact.name}（${artifact.icon}）\n\n权重: ${weights[artifact.key]}%\n\n此资产代表：${
                    artifact.theme === 'forest' ? '科技股' : 
                    artifact.theme === 'snow' ? '债券' : 
                    artifact.theme === 'volcano' ? '商品' : '加密货币'
                  }\n\n风险提示: ${weights[artifact.key] > 60 ? '集中风险' : '分散配置'}`);
                }}
              >
                <span>点击查看 Mini Chart</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 8, color: '#888' }}>
          总分配: <strong>{Object.values(weights).reduce((a, b) => (a as number) + (b as number), 0)}%</strong>
        </div>
      </div>

      {/* Returns and Actions */}
      <div className="legacy-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '1.1rem', color: '#34495e' }}>当日收益</h2>
          <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>
            {returns !== null ? `${returns}%` : '请点击"下一天"模拟收益'}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button className="legacy-btn" style={{ marginTop: 0 }} onClick={onNextDay}>
            下一天
          </button>
          <button className="legacy-btn legacy-reset" style={{ marginTop: 0 }} onClick={onResetGame}>
            重置游戏
          </button>
        </div>
      </div>
    </div>
  );
};
