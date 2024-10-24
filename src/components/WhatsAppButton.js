import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 9000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = '+5511947727979';
  const message = 'Hello!';
  const whatsappUrl = `https://wa.me/${+5511947727979}?text=${encodeURIComponent(message)}`;
  useEffect(() => {
    let interval;
    if (showButton) {
      interval = setInterval(() => {
        const icon = document.querySelector('.turning-icon');
        if (icon) {
          icon.classList.toggle('turn-left-right');
        }
      }, 2000); // 2 seconds
    }
    return () => clearInterval(interval);
  }, [showButton]);
  return (
    <div>
      {showButton && (
        <div className="whatsapp-button">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
           <div className='chat'> <i class="fa fa-comments fa-3x turning-icon turn-left-right"></i> {/* WhatsApp icon with size fa-3x */}</div>
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
