interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="welcome">
      <div className="welcome-icon">📊</div>
      <h2>Welcome to the Fabric Adoption Assessment</h2>
      <p>
        This assessment evaluates your organization's Microsoft Fabric adoption
        maturity across 12 key areas. Based on your answers, you'll receive a
        personalized maturity score and a concrete action plan to reach the next
        level.
      </p>

      <div className="welcome-features">
        <div className="welcome-feature">
          <div className="feature-icon">📋</div>
          <h4>12 Key Areas</h4>
          <p>Based on the official Microsoft Fabric Adoption Roadmap</p>
        </div>
        <div className="welcome-feature">
          <div className="feature-icon">📈</div>
          <h4>Maturity Score</h4>
          <p>See where you stand on a 100-500 scale per area</p>
        </div>
        <div className="welcome-feature">
          <div className="feature-icon">✅</div>
          <h4>Action Plan</h4>
          <p>Get specific steps to reach your next maturity level</p>
        </div>
        <div className="welcome-feature">
          <div className="feature-icon">⏱️</div>
          <h4>~10 Minutes</h4>
          <p>Quick assessment with beginner-friendly questions</p>
        </div>
      </div>

      <button className="btn btn-primary btn-large" onClick={onStart}>
        Start Assessment
      </button>
    </div>
  );
}
