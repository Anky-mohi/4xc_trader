import React, { useState } from 'react';
import './Learn.css';  // Import the CSS file for styling

const Learn = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="learn-section">
      <h2 className="section-title">Learn About Binary Options</h2>
      <div className="faq-container">
        <div className="faq-item">
          <h3 onClick={() => toggleSection(1)} className="faq-title">
            What are Binary Options?
          </h3>
          <div className={`faq-content ${activeSection === 1 ? 'active' : ''}`}>
            <p>
              Binary options are financial instruments that allow you to speculate on the future direction of an asset's price (like stocks, currencies, or commodities). You only need to decide whether the price will rise or fall by a specific expiration time.
            </p>
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleSection(2)} className="faq-title">
            How Operations Work
          </h3>
          <div className={`faq-content ${activeSection === 2 ? 'active' : ''}`}>
            <ol>
              <li>Choose an asset (like Apple stock, EUR/USD currency pair, or gold).</li>
              <li>Set your investment amount.</li>
              <li>Select the option type: High/Low, One Touch, or Range.</li>
              <li>Define an expiration time.</li>
              <li>Monitor the performance of your trade.</li>
            </ol>
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleSection(3)} className="faq-title">
            What is Expiration Time?
          </h3>
          <div className={`faq-content ${activeSection === 3 ? 'active' : ''}`}>
            <p>
              Expiration time is the duration after which the option will expire. It can be short-term (1-5 minutes), medium-term (15 minutes to 1 hour), or long-term (1 day to several weeks).
            </p>
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleSection(4)} className="faq-title">
            Profit and Risk Possibilities
          </h3>
          <div className={`faq-content ${activeSection === 4 ? 'active' : ''}`}>
            <p>
              Return: Brokers generally offer between 60% and 90% returns on successful trades. If you invest $100, you can get $160-$190, depending on the broker.  
              Risk: If you lose the trade, you lose your entire investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
