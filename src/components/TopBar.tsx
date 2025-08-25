import React from 'react';

interface TopBarProps {
  companyName: string;
  avatar: string;
  badges: string[];
  day: number;
  coins: number;
  gems: number;
  theme: string;
  onEditCompany: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  companyName,
  avatar,
  badges,
  day,
  coins,
  gems,
  theme,
  onEditCompany
}) => {
  return (
    <>
      {/* Company/Avatar Customization Modal Button */}
      <button 
        style={{ 
          position: 'fixed', 
          top: 32, 
          right: 32, 
          zIndex: 1000, 
          background: '#f6d365', 
          color: '#222', 
          borderRadius: '50%', 
          width: 60, 
          height: 60, 
          fontSize: 28, 
          fontWeight: 900, 
          boxShadow: '0 0 16px #f6d365cc', 
          border: 'none', 
          cursor: 'pointer' 
        }} 
        onClick={onEditCompany} 
        title="编辑公司信息"
      >
        ⚙️
      </button>

      {/* Sticky Top Bar with Company/Avatar/Resources */}
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 10, 
        background: theme === 'cyberpunk' ? 'rgba(20,20,40,0.98)' : theme === 'classic' ? '#fff' : '#f6d365', 
        borderBottom: '2px solid #00fff7', 
        padding: '0.8rem 2rem', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: '1.5rem' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img 
            src={avatar} 
            alt="avatar" 
            style={{ 
              width: 40, 
              height: 40, 
              borderRadius: '50%', 
              boxShadow: '0 0 8px #e67e22' 
            }} 
          />
          <span style={{ 
            fontWeight: 700, 
            fontSize: '1.1rem', 
            color: theme === 'cyberpunk' ? '#00fff7' : theme === 'classic' ? '#222' : '#e67e22' 
          }}>
            {companyName}
          </span>
        </div>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#00fff7' }}>
          守护者之星：{badges.length}/5
        </div>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ff00cc' }}>
          财富目标：300%
        </div>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>
          第 {day + 1} 天
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ 
            background: '#f6d365', 
            color: '#222', 
            borderRadius: 8, 
            padding: '0.3em 1em', 
            fontWeight: 700 
          }}>
            💰 {coins}
          </span>
          <span style={{ 
            background: '#ff00cc', 
            color: '#fff', 
            borderRadius: 8, 
            padding: '0.3em 1em', 
            fontWeight: 700 
          }}>
            💎 {gems}
          </span>
        </div>
      </div>
    </>
  );
};
