import React from 'react';

interface ModalsProps {
  showModal: boolean;
  modalContent: string;
  aiChatOpen: boolean;
  dilemma: string | null;
  quiz: any;
  quizAnswered: string | null;
  endgame: boolean;
  showSummary: boolean;
  companyName: string;
  avatar: string;
  avatarOptions: string[];
  theme: string;
  pendingCompanyName: string;
  aiPartnerData: any;
  aiInput: string;
  aiResponse: string;
  returns: number | null;
  badges: string[];
  onModalClose: () => void;
  onCompanyNameChange: (name: string) => void;
  onAvatarChange: (avatar: string) => void;
  onThemeChange: (theme: string) => void;
  onPendingCompanyNameChange: (name: string) => void;
  onDilemmaClose: () => void;
  onQuizAnswer: (answer: string) => void;
  onQuizClose: () => void;
  onEndgameClose: () => void;
  onSummaryClose: () => void;
  onAiInputChange: (input: string) => void;
  onAiAsk: () => void;
  onAiChatClose: () => void;
  onResetGame: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  showModal,
  modalContent,
  aiChatOpen,
  dilemma,
  quiz,
  quizAnswered,
  endgame,
  showSummary,
  companyName,
  avatar,
  avatarOptions,
  theme,
  pendingCompanyName,
  aiPartnerData,
  aiInput,
  aiResponse,
  returns,
  badges,
  onModalClose,
  onCompanyNameChange,
  onAvatarChange,
  onThemeChange,
  onPendingCompanyNameChange,
  onDilemmaClose,
  onQuizAnswer,
  onQuizClose,
  onEndgameClose,
  onSummaryClose,
  onAiInputChange,
  onAiAsk,
  onAiChatClose,
  onResetGame
}) => {
  // Helper to extract options from dilemma question
  const getDilemmaOptions = (q: string) => {
    return ['A. 坚持长期持有', 'B. 立即止损', 'C. 增加投资'];
  };

  return (
    <>
      {/* Company/Avatar Customization Modal */}
      {showModal && modalContent === 'edit' && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          background: 'rgba(0,0,0,0.7)', 
          zIndex: 999, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <div style={{ 
            background: '#fff', 
            color: '#222', 
            borderRadius: 16, 
            padding: 32, 
            minWidth: 320, 
            maxWidth: 480, 
            boxShadow: '0 0 32px #f6d365cc', 
            position: 'relative', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 16 
          }}>
            <span 
              style={{ 
                position: 'absolute', 
                top: 12, 
                right: 18, 
                fontSize: 22, 
                cursor: 'pointer', 
                color: '#e67e22' 
              }} 
              onClick={onModalClose}
            >
              ×
            </span>
            <h2 style={{ color: '#e67e22', marginBottom: 16 }}>
              {companyName ? '编辑公司信息' : '注册公司'}
            </h2>
            <label style={{ fontWeight: 700, marginBottom: 8 }}>公司名称：</label>
            <input 
              type="text" 
              value={pendingCompanyName} 
              onChange={e => onPendingCompanyNameChange(e.target.value)} 
              style={{ 
                padding: '0.7rem 1rem', 
                borderRadius: 8, 
                border: '1px solid #e67e22', 
                fontSize: 16, 
                marginBottom: 8, 
                background: '#f6d36522', 
                color: '#222' 
              }} 
              autoFocus 
            />
            <label style={{ fontWeight: 700, marginBottom: 8 }}>选择头像：</label>
            <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
              {avatarOptions.map(url => (
                <img 
                  key={url} 
                  src={url} 
                  alt="avatar" 
                  style={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    border: avatar === url ? '3px solid #e67e22' : '2px solid #ccc', 
                    cursor: 'pointer', 
                    boxShadow: avatar === url ? '0 0 8px #e67e22' : 'none' 
                  }} 
                  onClick={() => onAvatarChange(url)} 
                />
              ))}
            </div>
            <label style={{ fontWeight: 700, marginBottom: 8 }}>主题风格：</label>
            <select 
              value={theme} 
              onChange={e => onThemeChange(e.target.value)} 
              style={{ 
                padding: '0.7rem 1rem', 
                borderRadius: 8, 
                border: '1px solid #e67e22', 
                fontSize: 16, 
                marginBottom: 8, 
                background: '#f6d36522', 
                color: '#222' 
              }}
            >
              <option value="cyberpunk">赛博朋克</option>
              <option value="classic">经典</option>
              <option value="meme">搞笑</option>
            </select>
            <button 
              className="legacy-btn" 
              style={{ background: '#e67e22', color: '#fff', marginTop: 12 }} 
              onClick={onModalClose}
            >
              取消
            </button>
            {companyName ? (
              <button 
                className="legacy-btn" 
                style={{ background: '#00fff7', color: '#222', marginTop: 12 }} 
                onClick={() => { 
                  onCompanyNameChange(pendingCompanyName); 
                  onModalClose(); 
                }}
              >
                保存
              </button>
            ) : (
              <button 
                className="legacy-btn" 
                style={{ background: '#00fff7', color: '#222', marginTop: 12 }} 
                onClick={() => { 
                  onCompanyNameChange(pendingCompanyName); 
                  onModalClose(); 
                }}
              >
                注册
              </button>
            )}
          </div>
        </div>
      )}

      {/* AI Chat Modal */}
      {aiChatOpen && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          background: 'rgba(0,0,0,0.7)', 
          zIndex: 9999, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <div style={{ 
            background: '#222', 
            color: '#fff', 
            borderRadius: 16, 
            padding: 32, 
            minWidth: 320, 
            maxWidth: 480, 
            boxShadow: '0 0 32px #00fff7cc', 
            position: 'relative', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 16 
          }}>
            <span 
              style={{ 
                position: 'absolute', 
                top: 12, 
                right: 18, 
                fontSize: 22, 
                cursor: 'pointer', 
                color: '#ff00cc' 
              }} 
              onClick={onAiChatClose}
            >
              ×
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <img 
                src={aiPartnerData.avatar} 
                alt="AI Partner" 
                style={{ 
                  width: 36, 
                  height: 36, 
                  borderRadius: '50%', 
                  boxShadow: '0 0 8px #00fff7' 
                }} 
              />
              <span style={{ fontWeight: 700, color: '#00fff7' }}>{aiPartnerData.name}</span>
            </div>
            <div style={{ fontSize: 16, marginBottom: 8 }}>
              你可以向AI伙伴提问任何金融相关问题。
            </div>
            <input 
              type="text" 
              value={aiInput} 
              onChange={e => onAiInputChange(e.target.value)} 
              placeholder="请输入你的问题..." 
              style={{ 
                padding: '0.7rem 1rem', 
                borderRadius: 8, 
                border: '1px solid #00fff7', 
                fontSize: 16, 
                marginBottom: 8, 
                background: '#111', 
                color: '#fff' 
              }} 
            />
            <button className="legacy-btn" style={{ marginBottom: 8 }} onClick={onAiAsk}>
              发送
            </button>
            {aiResponse && (
              <div style={{ 
                background: '#333', 
                color: '#00fff7', 
                borderRadius: 8, 
                padding: 12, 
                fontSize: 16, 
                marginTop: 8 
              }}>
                {aiResponse}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Dilemma Modal */}
      {dilemma && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          background: 'rgba(0,0,0,0.8)', 
          zIndex: 999, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <div style={{ 
            background: '#222', 
            color: '#fff', 
            borderRadius: 16, 
            padding: 32, 
            minWidth: 320, 
            maxWidth: 480, 
            boxShadow: '0 0 32px #00fff7cc', 
            position: 'relative' 
          }}>
            <h2 style={{ color: '#ff00cc', marginBottom: 16 }}>决策时刻</h2>
            <div style={{ fontSize: 18, marginBottom: 24 }}>{dilemma}</div>
            <div style={{ display: 'flex', gap: 16 }}>
              {getDilemmaOptions(dilemma).map((opt, idx) => (
                <button 
                  className="legacy-btn" 
                  key={opt+idx} 
                  onClick={onDilemmaClose}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Quiz Modal */}
      {quiz && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          background: 'rgba(0,0,0,0.8)', 
          zIndex: 999, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <div style={{ 
            background: '#222', 
            color: '#fff', 
            borderRadius: 16, 
            padding: 32, 
            minWidth: 320, 
            maxWidth: 480, 
            boxShadow: '0 0 32px #00fff7cc', 
            position: 'relative' 
          }}>
            <h2 style={{ color: '#00fff7', marginBottom: 16 }}>金融知识小测验</h2>
            <div style={{ fontSize: 18, marginBottom: 24 }}>{quiz.question}</div>
            <div style={{ display: 'flex', gap: 16 }}>
              {quiz.options.map(opt => (
                <button 
                  className="legacy-btn" 
                  key={opt} 
                  onClick={() => onQuizAnswer(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
            {quizAnswered && (
              <div style={{ 
                marginTop: 18, 
                color: quizAnswered === quiz.answer ? '#27ae60' : '#e74c3c', 
                fontWeight: 700 
              }}>
                {quizAnswered === quiz.answer ? '回答正确！获得知识大师徽章！' : '回答错误，再接再厉！'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Endgame Modal */}
      {endgame && !showSummary && (
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'rgba(0,0,0,0.85)', 
          zIndex: 99, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <img 
            src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" 
            alt="victory" 
            style={{ width: 180, height: 180, marginBottom: 24 }} 
          />
          <h2 style={{ 
            color: '#00fff7', 
            fontSize: '2rem', 
            textShadow: '0 0 16px #ff00cc' 
          }}>
            传奇空岛重启成功！
          </h2>
          <div style={{ color: '#fff', marginTop: 12 }}>
            你已收集全部神器徽章，财富目标达成，成功渡过终极经济风暴！
          </div>
        </div>
      )}

      {/* Summary Modal */}
      {showSummary && (
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'rgba(0,0,0,0.95)', 
          zIndex: 100, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: 32 
        }}>
          <h2 style={{ color: '#ff00cc', fontSize: '2rem', marginBottom: 16 }}>冒险总结</h2>
          <div style={{ color: '#fff', fontSize: '1.2rem', marginBottom: 16 }}>
            <div>累计收益：{returns}%</div>
            <div>获得徽章：{badges.join('、')}</div>
            <div>教育收获：分散投资、长期主义、风险管理、冷静应对市场波动</div>
          </div>
          <button className="legacy-btn" onClick={onSummaryClose}>
            再玩一次
          </button>
        </div>
      )}

      {/* General Modal */}
      {showModal && modalContent !== 'edit' && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            background: 'rgba(0,0,0,0.7)', 
            zIndex: 999, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }} 
          onClick={onModalClose}
        >
          <div style={{ 
            background: '#222', 
            color: '#fff', 
            borderRadius: 16, 
            padding: 32, 
            minWidth: 320, 
            maxWidth: 480, 
            boxShadow: '0 0 32px #00fff7cc', 
            position: 'relative' 
          }}>
            <span 
              style={{ 
                position: 'absolute', 
                top: 12, 
                right: 18, 
                fontSize: 22, 
                cursor: 'pointer', 
                color: '#ff00cc' 
              }} 
              onClick={onModalClose}
            >
              ×
            </span>
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: 16 }}>{modalContent}</pre>
          </div>
        </div>
      )}
    </>
  );
};
