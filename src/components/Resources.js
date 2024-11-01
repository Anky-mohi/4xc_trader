// Brands.js
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import WhatsAppButton from "./WhatsAppButton";
import LanguageSwitcher from "../LanguageSwitcher";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";



const brandsData = [
  'brand1.jpg',
  'brand2.jpg',
  'brand3.jpeg',
  'brand4.jpeg',
  'brand5.png',
  'brand6.jpeg',
  'brand7.png',
  'brand8.jpg',
  'brand9.jpeg',
  'brand11.jpeg',
  'brand12.jpeg',
  'brand13.jpeg',
  'brand14.jpeg',
  'brand15.jpeg',


  
  // Add more images as needed
];

const BrandsSection = styled.section`
  text-align: center;
  padding: 40px;
`;

const BrandContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const BrandLogo = styled.div`
  width: 120px;
  height: 120px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px; // Optional: Add border radius to the images
  }
`;


const Resources = () => {
  const { t } = useTranslation();
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
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
    <img src="Advanced_Trading_4xc.jpg" alt="Contact Us Background"/>
  </div>
  <div class="content">
    
    <a href="mailto:contact@yourdomain.com" class="contact-button">{t("Contact us today")}</a>
  </div>
</section>


     
<div class="news-section">
  <div class="container">
    <h2>{t("Latest Market News")}</h2>

    <div class="news-cards">
      
      <div class="news-card">
        <img src="aud_11.jpg" alt="Australia's CPI Growth" class="news-thumbnail" />
        <div class="news-content">
          <h3>Australia's CPI Growth Slows to 3.5%, Impacting AUD Performance</h3>
          <p>9 hours ago</p>
        </div>
      </div>

     
      <div class="news-card">
        <img src="market_update_4.jpg" alt="Yen Dips Amid Diverging US and Japan Rate Expectations" class="news-thumbnail" />
        <div class="news-content">
          <h3>Yen Dips Amid Diverging US and Japan Rate Expectations</h3>
          <p>9 hours ago</p>
        </div>
      </div>

     
      <div class="news-card">
        <img src="gold_3.jpg" alt="Market Dynamics Amid Military Escalation" class="news-thumbnail" />
        <div class="news-content">
          <h3>Market Dynamics Amid Military Escalation: Gold Shines as Violence Rises</h3>
          <p>10 hours ago</p>
        </div>
      </div>

      
      <div class="news-card">
        <img src="aud_7.jpg" alt="Geopolitical Tensions Weigh on Australian Dollar" class="news-thumbnail" />
        <div class="news-content">
          <h3>Geopolitical Tensions Weigh on Australian Dollar Ahead of CPI Report</h3>
          <p>10 hours ago</p>
        </div>
      </div>

      
      <div class="news-card">
        <img src="aud_3.jpg" alt="Australian Dollar Stabilizes" class="news-thumbnail" />
        <div class="news-content">
          <h3>Australian Dollar Stabilizes as RBA Maintains Hawkish Stance Amid Fed Rate Cut Speculations</h3>
          <p>a day ago</p>
        </div>
      </div>
    </div>

   
    <div class="disclaimer">
      <p>
      {t("DISCLAIMER: This material comprises personal opinions and ideas. It does not suggest purchasing financial services, nor does it guarantee the performance or outcome of future transactions. The material should not be interpreted as containing any type of financial advice. The accuracy, validity, or completeness of this information is not guaranteed, and no liability is assumed for any loss related to any investment based on the material.")}
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

export default Resources;
