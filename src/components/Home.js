import React from "react";
import { Link } from "react-router-dom";
import Brands from "./Resources";
import Portfolio from "./Learn";
import VideoSection from "./Pertner";
import ImageOverlayAnimation from "./ImageOverlayAnimation";
import UpDownAnimation from "./UpDownAnimation";
import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Rightupdown from "./Rightupdown";
import PlanCard from "./PlanCard";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Portfolios from "../components/Portfolios";
import WhatsAppButton from "./WhatsAppButton";
import TradingRobot from "./TradingRobot";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageButton, setShowLanguageButton] = useState(false);

 
  useEffect(() => {
    // Show the language button after a delay when the component mounts
    const timer = setTimeout(() => {
      setShowLanguageButton(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const handleChatClick = () => {
    setIsOpen(!isOpen);
  };
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

  const { t } = useTranslation();

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
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

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message to chat history
    setMessages([...messages, { text: input, user: "user" }]);

    // Clear input field
    setInput("");
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

      <main>
        <section class="hero_image pt100 pb100">
          <div class="row hero_banr ">
            <div class="col-md-3 igm">
              <Rightupdown />
            </div>
            <div class="col-md-6 cmw custom-margin">
              <h1 class="f-w-100 dwt pb tf dc f40">
                {t("Trade Options, Stocks, ETFs, Forex and Crypto")}
              </h1>
              <p class="dc pm f22 dwt st f-w-100">
                {t(
                  "With over 13 years of experience in the market, we are the most used binary options broker in Europe. Our journey is marked by transparency, reliability, and innovation, making us the preferred choice for traders seeking safety and performance."
                )}
              </p>
              <p class="dc pm f22 dwt st f-w-100">
                {t(
                  "At Trader 4xc, we take security seriously. Our site is regulated by the main market authorities, ensuring that your data and capital are always protected. We use cutting-edge technology to safeguard your information and transactions, providing a secure environment for your trading."
                )}
              </p>

              <p class="dwt">
                <img src="./Badget.png" class="badge-img" />
              </p>



              <div class="but">
                <button class="btn"> <button className="nav-btn nav-close-btn" onClick={showNavbar}>

                </button>
                  <div className="w">
                    <div class="xxx">
                      <Link to="/Contact" class="b">
                        {t("Demo Account")}
                      </Link>
                    </div>
                  </div>

                </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button class="btn"> <button className="nav-btn nav-close-btn" >

                </button>
                  <div className="w">
                    <div class="xxx">
                      <Link to="/Contact" class="xx">
                        {t("Live Account")}
                      </Link>
                    </div>
                  </div></button>
              </div>



            </div>


            <div class="col-md-3 cli">
              <UpDownAnimation />
            </div>
          </div>
        </section>
        <div>




<br></br>
<br></br>



        <div class="section2">
    <h1 class="sub"> {t("ACCOUNTS THAT MATCH YOUR NEEDS")}</h1>
    <p> {t("Select your preferred account type or contact us for a custom solution designed just for you.")}</p>
</div>
<br></br>

<div class="card-container">

    <div class="card1">
        <h3>{t("Pro")}</h3>
        <p>{t("For More Experienced Traders Who Want A Professional Advantage.")}</p>
        <br/>
        <hr/>
        <Link to="/Accounttype">
            <button>{t("Choose Pro")} >></button>
        </Link>
    </div>
    
  
    <div class="card2">
        <h3>{t("Standard")}</h3>
        <p>{t("Standard On-line Trading Accounts. Great for All Types of Traders")}</p>
        <br/>
        <hr/>
        <Link to="/Accounttype">
            <button> {t("Choose Standard")}>></button>
        </Link>
    </div>
    
  
    <div class="card3">
        <h3>VIP</h3>
        <p>{t("Better Flexibility and Exclusive benefits")}</p>
        <br/>
        <hr/>
        <Link to="/Accounttype">
            <button>{t("Choose VIP")} >></button>
        </Link>
    </div>
</div>

<br></br>
<br></br>







          </div>
<br></br>
        <div class="features-container">
    <div class="feature-section">
        <div class="feature-image">
            <img src="./480@2x.webp" alt="Feature Image 1"/>
        </div>
        <div class="feature-content">
            <h2>{t("Risk Management")}
            </h2>
            <p>{t("With features such as Stop Loss/Take Profit, Negative Balance Protection and Trailing Stop, you can manage your losses and profits at the levels you set..")}</p>
            
        </div>
    </div>

    <div class="feature-section">
        <div class="feature-image">
            <img src="./840@1x (1).webp" alt="Feature Image 2"/>
        </div>
        <div class="feature-content">
            <h2>{t("Trading Community")}
            </h2>
            <p>{t("Join the massive 4xctraders community, discuss trading ideas and opportunities, or simply follow other traders with features like Trader Sentiment and Community Live Trades..")}</p>
           
        </div>
    </div>

    <div class="feature-section">
        <div class="feature-image">
            <img src="./840@1x.webp" alt="Feature Image 3"/>
        </div>
        <div class="feature-content">
            <h2>{t("Analysis & Alerts")}
            </h2>
            <p>{t("Get the most out of fundamental and technical analysis with our News Feed and Economic Calendars. More than 100 most widely used technical indicators and widgets. Always stay up-to-date on what is happening in the financial markets with our customizable price alerts..")}</p>
            
        </div>
    </div>
</div>
<br></br>
     
<div class="news-section">
  <div class="container">
    <h2>{t("Latest Market News")}</h2>

    <div class="news-cards">
      
      <div class="news-card">
        <img src="aud_11.jpg" alt="Australia's CPI Growth" class="news-thumbnail" />
        <div class="news-content">
          <h3>{t("Australia's CPI Growth Slows to 3.5%, Impacting AUD Performance")}</h3>
          <p>{t("9 hours ago")}</p>
        </div>
      </div>

     
      <div class="news-card">
        <img src="market_update_4.jpg" alt="Yen Dips Amid Diverging US and Japan Rate Expectations" class="news-thumbnail" />
        <div class="news-content">
          <h3>{t("Yen Dips Amid Diverging US and Japan Rate Expectations")}</h3>
          <p>{t("9 hours ago")}</p>
        </div>
      </div>

     
      <div class="news-card">
        <img src="gold_3.jpg" alt="Market Dynamics Amid Military Escalation" class="news-thumbnail" />
        <div class="news-content">
          <h3>{t("Market Dynamics Amid Military Escalation: Gold Shines as Violence Rises")}</h3>
          <p>{t("10 hours ago")}</p>
        </div>
      </div>

      
      <div class="news-card">
        <img src="aud_7.jpg" alt="Geopolitical Tensions Weigh on Australian Dollar" class="news-thumbnail" />
        <div class="news-content">
          <h3>{t("Geopolitical Tensions Weigh on Australian Dollar Ahead of CPI Report")}</h3>
          <p>{t("10 hours ago")}</p>
        </div>
      </div>

      
      <div class="news-card">
        <img src="aud_3.jpg" alt="Australian Dollar Stabilizes" class="news-thumbnail" />
        <div class="news-content">
          <h3>{t("Australian Dollar Stabilizes as RBA Maintains Hawkish Stance Amid Fed Rate Cut Speculations")}</h3>
          <p>{t("a day ago")}</p>
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
<br></br>
<br></br>

<div class="section">
        <div class="section-header">
            <h2 className="red"> {t("Start Trading in Three Steps")}</h2>
        </div>
        <div class="section-content">
            <div class="column">
                <img src="./registered.png" alt="Why Choose Us 1 Icon"/>
                <h3>{t("Registered")}</h3>
                <p>{t("Open an account for free in just a few minutes.")}</p>
            </div>
            <div class="column">
                <img src="./study.png" alt="Why Choose Us 2 Icon"/>
                <h3>{t("Practice")}</h3>
                <p>{t("Master your skills with a practice account and educational content.")}</p>
            </div>
            <div class="column">
                <img src="./purse.png" alt="Why Choose Us 3 Icon"/>
                <h3>{t("Deposit & Trade")}
                </h3>
                <p>{t("More than 250 instruments and a minimum deposit of $10 for optimal trading.")}</p>
            </div>
        </div>
    </div>

<br>
</br>
<div class="hero-section">
    <div class="hero-content">
        <h1>{t("Online Trading Platform")}
        </h1>
        <p>{t("CFDs on Stocks, ETFs, Commodities, Indices, Cryptocurrencies and Forex")}
        .</p>
        <button>{t("Start Trading")}</button>
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


      </main>
      
    </>
  );
};

export default Home;
