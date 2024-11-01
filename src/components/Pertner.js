// VideoSection.js
import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import WhatsAppButton from "./WhatsAppButton";
import LanguageSwitcher from "../LanguageSwitcher";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";



const VideoSectionContainer = styled.section`
  text-align: center;

  padding: 40px;
`;

const VideoWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const VideoCard = styled.div`
  margin-bottom: 20px;
`;

const Pertner = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const { t } = useTranslation();


  return (
   <>
    <div className="whatsapp">
        <div>
          <LanguageSwitcher />
          <WhatsAppButton />
        </div>
      </div>

      <header>
        <div className="logo">
          {" "}
          <a href="/">
            <img className="ls" src="./logo.png" alt="Brand Logo" />
          </a>
        </div>
        <nav ref={navRef}>
          <ul className="d">
            <li className="ws">
            <Link to="/Trade">
              <a href="/">
                <span>
                  {" "}
                  <img className="qa" src="./icon1.png" alt="" />{" "}
                </span>
                &nbsp;{t("Trade")}
              </a>
              </Link>

            </li>
            <li className="ws">
              {" "}
              <Link to="/Resources">
                <span>
                  {" "}
                  <img
                    className="qa"
                    src="./icon2.png"
                    alt=""
                  />{" "}
                </span>
                &nbsp;{t("Resources")}
              </Link>
            </li>
            <li className="ws">
              {" "}
              <Link to="/Learn">
                <span>
                  {" "}
                  <img className="qa" src="./learn.png" alt="" />{" "}
                </span>
                &nbsp;{t("Learn")}
              </Link>
            </li>
            <li className="ws">
              <Link to="/Pertner">
                <span>
                  {" "}
                  <img className="qa" src="./partner.png" alt="" />{" "}
                </span>
                &nbsp;{t("Partner")}
              </Link>
            </li>
            <li className="ws">
              <Link to="/About">
                <span>
                  {" "}
                  <img className="qa" src="./about.png" alt="" />{" "}
                </span>
                &nbsp;{t("About")}
              </Link>
            </li>
          </ul>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          <div className="w">
            {" "}
            <div class="introduction__button">
              <Link to="/Contact" class="abc">
                {t("Trade Now")}
              </Link>
            </div>
          </div>

        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>



      <section class="reach-out">
  <div class="background-image">
    <img src="Country-manager.jpg" alt="Contact Us Background"/>
  </div>
  <div class="content">
    <a href="mailto:contact@yourdomain.com" class="contact-button">{t("Contact us today")}</a>
  </div>
</section>





      
<div className="country-manager-section">
  <div className="container">
    
    <h2>{t("Join 4xctrader as a Country Manager")}</h2>
    <p>{t("Take on a Key Leadership Role in Driving Growth and Managing Business Operations in Your Country.")}</p>
    <button className="apply-now-btn">{t("Apply Now")}</button>
    
    <div className="features-cards">
      
      <div className="feature-card">
        <h3>{t("Stellar Career Growth")}</h3>
        <p>{t("Propel your career forward with ample opportunities for personal and professional development in a fast-paced, global industry.")}</p>
      </div>
      
      <div className="feature-card">
        <h3>{t("Cosmic Collaboration")}</h3>
        <p>{t("A team of professionals, working together to achieve astronomical success and drive innovation in the Forex market.")}</p>
      </div>

      <div className="feature-card">
        <h3>{t("Interstellar Flexibility")}</h3>
        <p>{t("Enjoy the freedom to manage your work-life balance, with flexible working hours and a supportive environment.")}</p>
      </div>

      <div className="feature-card">
        <h3>{t("Galactic Recognition")}</h3>
        <p>{t("Be rewarded for your hard work and dedication with competitive compensation packages and performance-based incentives.")}</p>
      </div>
    </div>

    <div className="about-role">
      <h3>{t("ABOUT THE ROLE")}</h3>
      <p>
        <strong>{t("Who is a Country Manager?")}</strong><br/>
        {t("A Country Manager is a senior-level executive responsible for managing and growing the business operations of a forex company in a particular region or country. The role of a Country Manager is crucial, as they are responsible for driving growth, building relationships with clients, managing local teams, and ensuring that the company is compliant with local regulations.")}
      </p>
      
      <h4>{t("Key Responsibilities")}</h4>
      <ul>
        <li>{t("Building business for the assigned region/country")}</li>
        <li>{t("Managing the local office")}</li>
        <li>{t("Growing an extensive and profitable portfolio")}</li>
        <li>{t("Recruiting and leading a Business Development team")}</li>
        <li>{t("Promoting the business in local language industry-specific forums, seminars, and webinars")}</li>
      </ul>
    </div>

    <div className="why-apply">
      <h3>{t("Why Apply")}</h3>
      <p>
        <strong>{t("Elevate to Orbital Excellence")}</strong><br/>
        {t("Gain invaluable insights into the local market, including its cultural nuances, regulatory framework, and competitive landscape, as you tailor operations to meet the unique needs of your region.")}
      </p>
      
      <h4>{t("Market Insights")}</h4>
      <p>{t("Gain invaluable insights into the local market, including its cultural nuances, regulatory framework, and competitive landscape, as you tailor operations to meet the unique needs of your region.")}</p>

      <h4>{t("Leadership")}</h4>
      <p>{t("Seize the chance to take your career to the next level as a Country Manager. In this role, you'll uncover a wealth of opportunities, ranging from gaining in-depth market knowledge and honing your leadership skills to fostering lasting connections with clients and making a meaningful difference.")}</p>
      
      <h4>{t("Client Relations")}</h4>
      <p>{t("Foster lasting connections with clients and make a meaningful difference.")}</p>

      <h4>{t("Impact and Recognition")}</h4>
      <p>{t("Start this exhilarating adventure and find out what it means to excel in the Forex industry. Are you prepared to embark on this remarkable path with us?")}</p>
      
      <button className="apply-now-btn">{t("Apply Now")}</button>
    </div>

    <div className="contact-info">
      <p>
        <strong>{t("4xCtrader Ltd")}</strong><br/>
        {t("Company Registration no. 12767/2018 | License number MC03/2018")}<br/>
        {t("1st Floor, BCI House, Avarua, Rarotonga, Cook Islands")}<br/>
        {t("Email: info@4xc.com")}
      </p>
    </div>
  </div>
</div>











<footer class="footer">
    <div class="footer-container">
        <div class="footer-column">
            <h4>{t("4xctrader Ltd")}</h4>
            <p>{t("Company Registration no. 12767/2018 | License number MC03/2018")}</p>
            <p>{t("1st Floor, BCI House, Avarua, Rarotonga, Cook Islands")}</p>
            <p><a href="mailto:info@4xc.com">{t("info@4xc.com")}</a></p>
        </div>

        <div class="footer-column">
            <h4>{t("TRADING INSTRUMENTS")}</h4>
            <p><a href="#">{t("Forex")}</a></p>
            <p><a href="#">{t("Metals")}</a></p>
            <p><a href="#">{t("Index CFDs and Oil")}</a></p>
            <p><a href="#">{t("Cryptos")}</a></p>
            <p><a href="#">{t("Forward Contracts")}</a></p>
        </div>

        <div class="footer-column">
            <h4>{t("ACCOUNTS OVERVIEW")}</h4>
            <p><a href="#">{t("Pro Account")}</a></p>
            <p><a href="#">{t("Standard Account")}</a></p>
            <p><a href="#">{t("VIP Account")}</a></p>
        </div>

        <div class="footer-column">
            <h4>{t("SUPPORT")}</h4>
            <p><a href="#">{t("FAQ's")}</a></p>
            <p><a href="#">{t("Funding Methods")}</a></p>
            <p><a href="#">{t("Legal Documentation")}</a></p>
            <p><a href="#">{t("Contact Us")}</a></p>
        </div>
    </div>

    <div class="legal-notice">
        <p>{t("High Risk Investment Notice: Online trading with margin carries a high level of risk and may not be suitable for all investors as you could sustain losses in excess of deposits. The products are intended for retail, professional, and eligible counterparty clients. For clients who maintain account(s) with 4xctrader, retail clients could sustain a total loss of deposited funds but are not subject to subsequent payment obligations beyond the deposited funds and professional clients could sustain losses in excess of deposits. Prior to trading any products offered by 4xctrader, any affiliates of aforementioned firms, or other firms within 4xctrader of companies [collectively the “4xctrader Ltd”], carefully consider your financial situation and experience level. 4xctrader Ltd may provide general commentary which is not intended as investment advice and must not be construed as such. Seek advice from a separate financial advisor. 4xctrader Ltd assumes no liability for errors, inaccuracies or omissions; does not warrant the accuracy, completeness of information, text, graphics, links, or other items contained within these materials. Read and understand the Terms and Conditions on 4xctrader Ltd websites prior to taking further action.")}</p>
        <p>{t("4XC is a trademark of 4xctrader Ltd, registered in the Cook Islands with number ICA 12767/2018 and licensed by the FSC (Financial Supervisory Commission) with Money-Changing License number MC03/2018.")}</p>
        <p>{t("4xctrader Ltd is audited by McMillan Woods.")}</p>
        <p>{t("4xctrader Ltd does not offer its services to residents of certain jurisdictions such as the USA, Iraq, Iran, Myanmar, North Korea, and Portugal.")}</p>
    </div>

    <div class="footer-bottom">
        <p>{t("Official Sponsor: 4ctrader")}</p>
        <p>{t("Certification")}</p>
        <p>{t("Copyright © 2018 - 2024 4XCTRADER.COM")}</p>
        <p>{t("DMCA.com Protection Status")}</p>
    </div>
</footer>


   
   
   
   
   
   
   </>
  );
};

export default Pertner;
