// LanguageSwitcher.js
// LanguageSwitcher.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState,useEffect} from "react";


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showLanguageButton, setShowLanguageButton] = useState(false);

  useEffect(() => {
    // Show the language button after a delay when the component mounts
    const timer = setTimeout(() => {
      setShowLanguageButton(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to hide the button after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 50000); // 10 seconds in milliseconds

    // Clear the timeout when the component unmounts or when isVisible changes
    return () => clearTimeout(timer);
  }, []); 
  return (
    <>
    
  
  
     {isVisible && (
      <>
         <button className={`language-buttonr ${showLanguageButton ? 'visible' : ''}`} onClick={() => changeLanguage('en')}></button>
         <button className={`language-button ${showLanguageButton ? 'visible' : ''}`} onClick={() => changeLanguage('pt')}>
         </button>
         </>
      )}
     
    
    </>
  );
};

export default LanguageSwitcher;

