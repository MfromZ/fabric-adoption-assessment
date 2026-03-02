import { useState } from 'react';
import { assessmentAreas } from './data/assessmentData';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import ResultsPage from './components/ResultsPage';
import ProgressBar from './components/ProgressBar';

type AppPhase = 'welcome' | 'assessment' | 'results';

function App() {
  const [phase, setPhase] = useState<AppPhase>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const totalQuestions = assessmentAreas.length;

  const handleStart = () => {
    setPhase('assessment');
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleSelectOption = (areaId: string, level: number) => {
    setAnswers((prev) => ({ ...prev, [areaId]: level }));
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setPhase('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setPhase('welcome');
    setCurrentQuestion(0);
    setAnswers({});
  };

  const currentArea = assessmentAreas[currentQuestion];
  const currentAnswer = currentArea ? answers[currentArea.id] : undefined;

  return (
    <div className="app">
      <header className="header">
        <h1>Microsoft Fabric Adoption Assessment</h1>
        <p>Evaluate your organization's maturity and get actionable next steps</p>
      </header>

      {phase === 'assessment' && (
        <ProgressBar
          current={currentQuestion + 1}
          total={totalQuestions}
          areaTitle={currentArea.title}
        />
      )}

      <main className="main-content">
        {phase === 'welcome' && <WelcomeScreen onStart={handleStart} />}

        {phase === 'assessment' && (
          <QuestionCard
            key={currentArea.id}
            area={currentArea}
            selectedLevel={currentAnswer}
            onSelect={(level) => handleSelectOption(currentArea.id, level)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirst={currentQuestion === 0}
            isLast={currentQuestion === totalQuestions - 1}
            canProceed={currentAnswer !== undefined}
          />
        )}

        {phase === 'results' && (
          <ResultsPage answers={answers} onRestart={handleRestart} />
        )}
      </main>
    </div>
  );
}

export default App;
