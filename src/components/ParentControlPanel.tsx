import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

interface ParentControlPanelProps {
  pendingRequest: number | null;
  allowedAssets: string[];
  onApprove: () => void;
  onReject: () => void;
  onToggleAsset: (asset: string) => void;
  onClose: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Panel = styled.div`
  background: ${theme.colors.cyber.dark};
  color: ${theme.colors.cyber.text};
  border-radius: 16px;
  padding: 24px;
  min-width: 320px;
  max-width: 480px;
  box-shadow: 0 0 32px ${theme.colors.cyber.secondary}bb;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 12px;
  right: 18px;
  font-size: 22px;
  cursor: pointer;
  color: ${theme.colors.cyber.secondary};
`;

const AssetsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AssetLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ParentControlPanel: React.FC<ParentControlPanelProps> = ({
  pendingRequest,
  allowedAssets,
  onApprove,
  onReject,
  onToggleAsset,
  onClose
}) => {
  const assets = [
    { key: 'tech', label: '科技' },
    { key: 'bond', label: '债券' },
    { key: 'gold', label: '黄金' },
    { key: 'crypto', label: '加密' },
    { key: 'esg', label: 'ESG' },
    { key: 'stablecoin', label: '稳定币' },
    { key: 'yield', label: '收益' }
  ];

  return (
    <Overlay>
      <Panel>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h3>家长控制</h3>
        {pendingRequest !== null && (
          <div>
            <p>孩子申请 {pendingRequest} 探险币</p>
            <button className="legacy-btn" onClick={onApprove}>批准</button>
            <button className="legacy-btn" onClick={onReject}>拒绝</button>
          </div>
        )}
        <div>
          <h4>资产白名单</h4>
          <AssetsList>
            {assets.map(a => (
              <AssetLabel key={a.key}>
                <input
                  type="checkbox"
                  checked={allowedAssets.includes(a.key)}
                  onChange={() => onToggleAsset(a.key)}
                />
                {a.label}
              </AssetLabel>
            ))}
          </AssetsList>
        </div>
      </Panel>
    </Overlay>
  );
};
