import React from 'react';
import './TradingRobot.css';

const TradingRobot = () => {
  return (
    <div className="robot-container">
      <div className="robot-card">
        <div className="glow-ring"></div>
        <div className="robot-image">
          {/* Replace this with your robot image */}
          <img src="your-robot-image-url.png" alt="AI Trading Robot" />
        </div>
        <div className="robot-info">
          <h2>AI-Powered Trading Robot</h2>
          <p>Analyze markets, execute trades, and optimize your investments with our 24/7 trading robot powered by machine learning and data science.</p>
          <button className="trade-btn">Start Trading</button>
        </div>
      </div>

      <div className="robot-features">
        <h3>What Makes It Unique:</h3>
        <ul>
          <li>Real-time data-driven insights</li>
          <li>Automated and customized trades</li>
          <li>Advanced AI risk management</li>
          <li>Seamless execution with no delay</li>
        </ul>
      </div>
    </div>
  );
};

export default TradingRobot;