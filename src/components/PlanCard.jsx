// PlanCard.js
import React from 'react';
import  { useState } from 'react';



const PlanCard = ({ plan, handleSubscribe }) => {
  const [showMessage, setShowMessage] = useState(false);
const handleButtonClick = () => {
  handleSubscribe(plan);
  setShowMessage(true);

};
  return (
    <div className={`plan-card ${plan.title.toLowerCase()}`}>
      <h1>{plan.title}</h1>
      <hr></hr>
      <h2 className="price">${plan.price.toFixed(2)} / month</h2>
    <br></br>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      
      <button className='subscrip' onClick={handleButtonClick}>Subscribe</button>

{showMessage && <p className="subscription-message">We will Touch you shortly!</p>}
<br></br>
<a href="https://wa.me/919872567925" target="blank">
<button className='subscripchat' >Chat Now</button>

        </a>

    </div>
  );
};

export default PlanCard;
