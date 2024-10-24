import React, { useState, useEffect } from 'react';


const BirthdayEffect = () => {
  const [isCelebrating, setIsCelebrating] = useState(false);

  useEffect(() => {
    // Start the celebration effect when the component mounts
    setIsCelebrating(true);

    // Clean up the effect when the component unmounts
    return () => {
      setIsCelebrating(false);
    };
  }, []);

  return (
    <div className={`birthday-container ${isCelebrating ? 'celebrate' : ''}`}>
      <h1>Happy Birthday!</h1>
      <div className="balloon-container">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="balloon" />
        ))}
      </div>
      <div className="fireworks" />
    </div>
  );
};

export default BirthdayEffect;
