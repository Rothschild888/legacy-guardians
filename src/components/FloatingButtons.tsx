import React from 'react';

interface FloatingButtonsProps {
  wheelOpen: boolean;
  wheelResult: string | null;
  wheelUsed: boolean;
  aiChatOpen: boolean;
  onWheelOpen: () => void;
  onWheelClose: () => void;
  onSpinWheel: () => void;
  onAiChatOpen: () => void;
  onAiChatClose: () => void;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({
  wheelOpen,
  wheelResult,
  wheelUsed,
  aiChatOpen,
  onWheelOpen,
  onWheelClose,
  onSpinWheel,
  onAiChatOpen,
  onAiChatClose
}) => {
  return (
    <>
      {/* Spin the Wheel Floating Button */}
      <button 
        style={{ 
          position: 'fixed', 
          bottom: 110, 
          right: 32, 
          zIndex: 1000, 
          background: '#ff00cc', 
          color: '#fff', 
          borderRadius: '50%', 
          width: 60, 
          height: 60, 
          fontSize: 28, 
          fontWeight: 900, 
          boxShadow: '0 0 16px #ff00ccbb', 
          border: 'none', 
          cursor: wheelUsed ? 'not-allowed' : 'pointer', 
          opacity: wheelUsed ? 0.5 : 1 
        }} 
        onClick={() => !wheelUsed && onWheelOpen()} 
        title="每日转盘" 
        disabled={wheelUsed}
      >
        🎡
      </button>

      {/* AI Chat Floating Button */}
      <button 
        style={{ 
          position: 'fixed', 
          bottom: 32, 
          right: 32, 
          zIndex: 1000, 
          background: '#00fff7', 
          color: '#222', 
          borderRadius: '50%', 
          width: 60, 
          height: 60, 
          fontSize: 28, 
          fontWeight: 900, 
          boxShadow: '0 0 16px #00fff7cc', 
          border: 'none', 
          cursor: 'pointer' 
        }} 
        onClick={onAiChatOpen} 
        title="向AI伙伴提问"
      >
        💬
      </button>

      {/* Spin the Wheel Modal */}
      {wheelOpen && (
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
            boxShadow: '0 0 32px #ff00ccbb', 
            position: 'relative', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 16, 
            alignItems: 'center' 
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
              onClick={onWheelClose}
            >
              ×
            </span>
            <h2 style={{ color: '#ff00cc', marginBottom: 16 }}>每日转盘</h2>
            <div style={{ fontSize: 18, marginBottom: 24 }}>
              点击转盘，获得随机奖励或惩罚！每天限一次。
            </div>
            <button 
              className="legacy-btn" 
              style={{ fontSize: 22, padding: '0.7rem 2.5rem', marginBottom: 12 }} 
              onClick={onSpinWheel} 
              disabled={wheelResult !== null}
            >
              🎡 Spin!
            </button>
            {wheelResult && (
              <div style={{ 
                marginTop: 18, 
                color: '#fff', 
                fontWeight: 700, 
                fontSize: 20, 
                textShadow: '0 0 8px #ff00cc' 
              }}>
                {wheelResult}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
