import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import PlanCard from "./PlanCard";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import WhatsAppButton from "./WhatsAppButton";

const Accounttype = () => {
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
  const color = {
    color: "orange",
  };
  const plans = [
    {
      id: 1,
      title: "Bronze",
      price: 29.31,
      features: [
        "Free Hosting",
        "Custom Domain",
        "Online Support",
        "content changes",
      ],
    },
    {
      id: 2,
      title: "Silver",
      price: 48.63,
      features: [
        "Free Hosting + Domain",
        "",
        "SEO (Search Engine Optimization)",
        "Products Upload + content change up tp 25",
      ],
    },
    {
      id: 3,
      title: "Gold",
      price: 67.96,
      features: [
        "Free Hosting + Domain",
        "Online Support 24/7",
        "Instagram Marketing",
        "Products Upload + content change up tp 55",
      ],
    },
    {
      id: 4,
      title: "Diamond",
      price: 111.14,
      features: [
        "Free Hosting + Domain",
        "Online Support 24/7",
        "Professional Social Media Management",
        "Inclusion of up to 100 New Products and Page Changes",
      ],
    },
  ];
  const handleSubscribe = (plan) => {
    // Implement your payment processing logic here (e.g., integrate with a payment gateway)
    console.log(`Subscribed to ${plan.title} plan for $${plan.price}`);
  };

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
              <Link to="/Partner">
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


<br></br>

      <div class="account-section">
    <div class="account-header">
        <h2>{t("Matching the Needs of Every Trader")}</h2>
        <p>{t("Choose from our three account types or contact us for a tailor-made solution that meets your custom requirements.")}</p>
    </div>
    <br></br>
    <br></br>
    <div class="account-grid">
      
        <div class="account-card pro">
            <h3>{t("Pro")}</h3>
            <ul class="account-details">
                <li><strong>{t("Minimum Deposit:")}</strong> $100</li>
                <li><strong>{t("Spreads From:")}</strong> 0.0 pips</li>
                <li><strong>{t("Base Currencies:")}</strong> USD | EUR | GBP | BRL</li>
                <li><strong>{t("Max Leverage:")}</strong> 1:500</li>
                <li><strong>{t("Min Lots:")}</strong> 0.01</li>
                <li><strong>{t("Trade Commission:")}</strong> 5 USD per round 1.0 Forex lot</li>
                <li>{t("All Strategies Allowed")}</li>
                <li>{t("Swap-free Islamic Account")}</li>
                <li>{t("Forward Contracts")}</li>
            </ul>
            <a href="#" class="btn">{t("Open Account")}</a>
        </div>
        
  
        <div class="account-card standard">
            <h3>{t("Standard")}</h3>
            <ul class="account-details">
                <li><strong>{t("Minimum Deposit:")}</strong> $50</li>
                <li><strong>{t("Spreads From:")}</strong> 1.0 pips</li>
                <li><strong>{t("Base Currencies:")}</strong> USD | EUR | GBP | BRL</li>
                <li><strong>{t("Max Leverage:")}</strong> 1:500</li>
                <li><strong>{t("Min Lots:")}</strong> 0.01</li>
                <li><strong>{t("Trade Commission:")}</strong> No Commission</li>
                <li>{t("All Strategies Allowed")}</li>
                <li>{t("Swap-free Islamic Account")}</li>
                <li>{t("Forward Contracts")}</li>
            </ul>
            <a href="#" class="btn">{t("Open Account")}</a>
        </div>
        
        
        <div class="account-card vip">
            <h3>{t("VIP")}</h3>
            <ul class="account-details">
                <li><strong>{t("Minimum Deposit:")}</strong> $10,000</li>
                <li><strong>{t("Spreads From:")}</strong> 0.0 pips</li>
                <li><strong>{t("Base Currencies:")}</strong> USD | EUR | GBP | BRL</li>
                <li><strong>{t("Max Leverage:")}</strong> 1:500</li>
                <li><strong>{t("Min Lots:")}</strong> 0.01</li>
                <li><strong>{t("Trade Commission:")}</strong> 4 USD per round 1.0 Forex lot</li>
                <li>{t("All Strategies Allowed")}</li>
                <li>{t("Swap-free Islamic Account")}</li>
                <li>{t("Forward Contracts")}</li>
            </ul>
            <a href="#" class="btn">{t("Open Account")}</a>
        </div>
    </div>
</div>




<br></br>











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

export default Accounttype;
