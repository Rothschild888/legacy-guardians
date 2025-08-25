import React from 'react';

interface SidebarProps {
  aiPartnerData: any;
  badgesData: any[];
  badges: string[];
  history: any[];
  onBadgeClick: (badge: any) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  aiPartnerData,
  badgesData,
  badges,
  history,
  onBadgeClick
}) => {
  return (
    <div style={{ 
      flex: 0.7, 
      minWidth: 220, 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1.2rem', 
      background: 'rgba(30,30,60,0.95)', 
      borderRadius: 12, 
      boxShadow: '0 0 16px #ff00cc55', 
      padding: '1rem' 
    }}>
      {/* AI Partner Section */}
      <div>
        <h2 style={{ color: '#00fff7', fontSize: '1.1rem', marginBottom: 8 }}>AI 伙伴</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
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

      {/* Badges Section */}
      <div>
        <h2 style={{ color: '#e67e22', fontSize: '1.1rem', marginBottom: 8 }}>成就徽章</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {badgesData.map(badgeObj => (
            <span 
              key={badgeObj.key} 
              className={`legacy-badge${badges.includes(badgeObj.name.replace('徽章','')) ? '' : ' locked'}`} 
              title={badgeObj.desc} 
              onClick={() => onBadgeClick(badgeObj)} 
              style={{ cursor: 'pointer' }}
            >
              {badgeObj.name} {badges.includes(badgeObj.name.replace('徽章','')) ? '✔️' : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
