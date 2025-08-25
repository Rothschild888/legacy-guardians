import React from 'react';
import { TopBar, Sidebar, GameArea, FloatingButtons, Modals } from './index';
import { useGameState } from '../hooks/useGameState';
import artifactsData from '../constants/artifacts.json';
import badgesData from '../constants/badges.json';
import aiPartnerData from '../constants/ai-partner.json';

export const GameLayout: React.FC = () => {
  const gameState = useGameState();
  
  const {
    // State
    companyName, avatar, theme, coins, gems, wheelOpen, wheelResult, wheelUsed,
    aiChatOpen, aiInput, aiResponse, dilemma, quiz, quizAnswered, endgame,
    showSummary, history, weights, day, returns, event, task, badges,
    showModal, modalContent, pendingCompanyName, avatarOptions,
    
    // Actions
    setCompanyName, setAvatar, setTheme, setWheelOpen, setWheelResult, setWheelUsed,
    setAiChatOpen, setAiInput, setAiResponse, setDilemma, setQuiz, setQuizAnswered,
    setEndgame, setShowSummary, setShowModal, setModalContent, setPendingCompanyName,
    
    // Functions
    handleSpinWheel, handleAiAsk, resetGame, handleWeightChange, nextDay
  } = gameState;

  // Event handlers
  const handlers = {
    editCompany: () => { setShowModal(true); setModalContent('edit'); setPendingCompanyName(companyName); },
    modalClose: () => { setShowModal(false); setModalContent(''); },
    wheelClose: () => { setWheelOpen(false); setWheelResult(null); },
    aiChatClose: () => { setAiChatOpen(false); setAiInput(''); setAiResponse(''); },
    dilemmaClose: () => { setDilemma(null); nextDay(); },
    quizAnswer: (answer: string) => {
      setQuizAnswered(answer);
      setTimeout(() => { setQuiz(null); setQuizAnswered(null); nextDay(); }, 1200);
    },
    endgameClose: () => setEndgame(false),
    summaryClose: () => { setShowSummary(false); setEndgame(false); resetGame(); },
    badgeClick: (badge: any) => { setShowModal(true); setModalContent(`${badge.name}\n\n${badge.desc}`); }
  };

  return (
    <div className="legacy-container" style={{ paddingTop: 0, maxWidth: '1200px', margin: '2rem auto' }}>
      <TopBar {...{ companyName, avatar, badges, day, coins, gems, theme }} onEditCompany={handlers.editCompany} />
      
      <FloatingButtons
        wheelOpen={wheelOpen} wheelResult={wheelResult} wheelUsed={wheelUsed} aiChatOpen={aiChatOpen}
        onWheelOpen={() => setWheelOpen(true)} onWheelClose={handlers.wheelClose}
        onSpinWheel={handleSpinWheel} onAiChatOpen={() => setAiChatOpen(true)} onAiChatClose={handlers.aiChatClose}
      />

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'nowrap', marginBottom: '2rem' }}>
        <Sidebar {...{ aiPartnerData, badgesData, badges, history }} onBadgeClick={handlers.badgeClick} />
        
        <GameArea
          task={task} event={event} artifactsData={artifactsData} weights={weights} returns={returns}
          onWeightChange={handleWeightChange} onNextDay={nextDay} onResetGame={resetGame}
          onShowModal={(content) => { setShowModal(true); setModalContent(content); }}
        />
      </div>

      <Modals
        showModal={showModal} modalContent={modalContent} aiChatOpen={aiChatOpen}
        dilemma={dilemma} quiz={quiz} quizAnswered={quizAnswered} endgame={endgame} showSummary={showSummary}
        companyName={companyName} avatar={avatar} avatarOptions={avatarOptions} theme={theme}
        pendingCompanyName={pendingCompanyName} aiPartnerData={aiPartnerData} aiInput={aiInput}
        aiResponse={aiResponse} returns={returns} badges={badges}
        onModalClose={handlers.modalClose} onCompanyNameChange={setCompanyName} onAvatarChange={setAvatar}
        onThemeChange={setTheme} onPendingCompanyNameChange={setPendingCompanyName}
        onDilemmaClose={handlers.dilemmaClose} onQuizAnswer={handlers.quizAnswer}
        onQuizClose={() => setQuiz(null)} onEndgameClose={handlers.endgameClose}
        onSummaryClose={handlers.summaryClose} onAiInputChange={setAiInput}
        onAiAsk={handleAiAsk} onAiChatClose={handlers.aiChatClose} onResetGame={resetGame}
      />
    </div>
  );
};
