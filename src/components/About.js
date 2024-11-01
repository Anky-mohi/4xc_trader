import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import WhatsAppButton from "./WhatsAppButton";



const About = () => {
  const { t } = useTranslation();
  
    const styles = {
        backgroundColor: "#cb6036",
        color: "white",
        fontSize: "16px",
        padding: "90px",
        Text: "white",
      };
      const text = {
        color: "white",
      };
      const av = {
        background: "aliceblue"
      }
      const [menuOpen, setMenuOpen] = useState(false);

      useEffect(() => {
        const handleResize = () => {
          setMenuOpen(window.innerWidth > 767);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

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
    <img src="4XC_Astronaut_looking_at_map_out_of_this_world.jpg" alt="Contact Us Background"/>
  </div>
  <div class="content">
    <a href="mailto:contact@yourdomain.com" class="contact-button">{t("Contact us today")}</a>
  </div>
</section>







      <section class="contact-form">
  <div class="form-wrapper">
    <form action="/submit" method="post">
      <div class="form-row">
        <div class="form-group">
          <label for="name">{t("Name")}</label>
          <input type="text" id="name" name="name" required/>
        </div>
        <div class="form-group">
          <label for="email">{t("Email")}</label>
          <input type="email" id="email" name="email" required/>
        </div>
      </div>
      <div class="form-group">
        <label for="message">{t("Message")}</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">{t("Send Message")}</button>
    </form>
  </div>
</section>







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
  )
}

export default About