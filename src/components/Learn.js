
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Portfolios from "./Portfolios";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import WhatsAppButton from "./WhatsAppButton";
import { FaBars, FaTimes } from "react-icons/fa";
import './Learn.css';

const Learn = () => {
  const { t } = useTranslation();


  const sections = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.current.forEach(section => section && observer.observe(section));
  }, []);
// script.js


// script.js

// script.js

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const tableRows = document.querySelectorAll('#instruments-table tbody tr');
  const tabButtons = document.querySelectorAll('.tab-button');

  searchInput.addEventListener('input', function () {
      const filter = searchInput.value.toLowerCase();
      tableRows.forEach(row => {
          const symbol = row.cells[0].textContent.toLowerCase();
          const instrument = row.cells[1].textContent.toLowerCase();
          if (symbol.includes(filter) || instrument.includes(filter)) {
              row.style.display = '';
          } else {
              row.style.display = 'none';
          }
      });
  });

  tabButtons.forEach(button => {
      button.addEventListener('click', function () {
          const category = this.getAttribute('data-category');

          tabButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');

          tableRows.forEach(row => {
              if (category === 'all' || row.getAttribute('data-category') === category) {
                  row.style.display = '';
              } else {
                  row.style.display = 'none';
              }
          });
      });
  });
});









// script.js


3




  const styles = {
    backgroundColor: "#cb6036",
    color: "white",
    fontSize: "16px",
    padding: "90px",
    Text: "white",
  };

 










  // script.js

// script.js

document.addEventListener("DOMContentLoaded", function () {
  const apiKey = 'cr3lajhr01ql234gvq1gcr3lajhr01ql234gvq20';
  const endpoint = 'https://finnhub.io/api/v1/quote';
  const symbols = ['AAPL', 'GOOGL', 'MSFT']; // Example symbols

  async function fetchMarketData(symbol) {
      try {
          console.log(`Fetching data for symbol: ${symbol}`); // Debugging log
          const response = await fetch(`${endpoint}?symbol=${symbol}&token=${apiKey}`);
          if (!response.ok) {
              throw new Error(`Error fetching data for ${symbol}: ${response.statusText}`);
          }
          const data = await response.json();
          console.log(`Data received for ${symbol}:`, data); // Debugging log
          return data;
      } catch (error) {
          console.error('Error fetching market data:', error);
      }
  }

  function createChart(canvasId, data) {
      const ctx = document.getElementById(canvasId).getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: ['Open', 'Current', 'High', 'Low', 'Previous Close'],
              datasets: [{
                  label: 'Price',
                  data: [data.o, data.c, data.h, data.l, data.pc],
                  backgroundColor: 'rgba(0, 123, 255, 0.2)',
                  borderColor: 'rgba(0, 123, 255, 1)',
                  borderWidth: 2
              }]
          },
          options: {
              responsive: true,
              scales: {
                  x: { display: false },
                  y: { beginAtZero: false }
              }
          }
      });
  }

  function updateMarketData() {
      const marketDataContainer = document.getElementById('market-data-container');
      if (!marketDataContainer) {
          console.error('Market data container not found.');
          return;
      }

      marketDataContainer.innerHTML = ''; // Clear previous data

      symbols.forEach(async (symbol) => {
          const data = await fetchMarketData(symbol);

          if (data) {
              const marketItem = document.createElement('div');
              marketItem.className = 'market-item';
              marketItem.innerHTML = `
                  <h3>${symbol}</h3>
                  <p>Current Price: <span class="price">$${data.c ? data.c.toFixed(2) : 'N/A'}</span></p>
                  <p>High Price: $${data.h ? data.h.toFixed(2) : 'N/A'}</p>
                  <p>Low Price: $${data.l ? data.l.toFixed(2) : 'N/A'}</p>
                  <p>Open Price: $${data.o ? data.o.toFixed(2) : 'N/A'}</p>
                  <p>Previous Close: $${data.pc ? data.pc.toFixed(2) : 'N/A'}</p>
                  <div class="chart-container">
                      <canvas id="chart-${symbol}" class="chart"></canvas>
                  </div>
              `;
              marketDataContainer.appendChild(marketItem);

              // Create a chart for each market item
              createChart(`chart-${symbol}`, data);
          } else {
              console.warn(`No data available for symbol: ${symbol}`); // Debugging log
          }
      });
  }

  // Fetch and update market data every 15 seconds
  setInterval(updateMarketData, 15000);
  updateMarketData(); // Initial fetch
});



// script.js




  

  // State to keep track of the current slide index
  

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1);
  };
  const text = {
    color: "white",
  };
  const [isUp, setIsUp] = useState(true);

  const toggleDirection = () => {
    setIsUp((prevState) => !prevState);
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
    <a href="mailto:contact@yourdomain.com" class="contact-button">{t("Open An Account And Trade Binary")}</a>
  </div>
</section>

<br></br>

<br></br>





    <div className="learn-container">
      <h1 className="title">{t("Binary Options Trading")}</h1>

      <section className="section">
        <h2>{t("What are Binary Options?")}</h2>
        <p>
          {t("Binary options are financial instruments that allow traders to speculate on the price movement of assets (stocks, commodities, or currencies) within a specific time frame. The return is fixed, based on a 'yes' or 'no' outcome.")}
        </p>
      </section>

      <section className="section">
        <h2>{t("Operations")}</h2>
        <p>
          <strong>{t("Entry (Bet):")}</strong> {t("The trader selects an asset, an investment amount, and a direction (up or down). If they believe the price will rise, they choose a 'call option.'")}
        </p>
        <p>
          <strong>{t("Exit:")}</strong> {t("At the expiration time, the trader receives a fixed return if they predicted correctly, or loses their investment if they did not.")}
        </p>
      </section>

      <section className="section">
        <h2>{t("Return Percentage")}</h2>
        <p>
          {t("The return on investment (ROI) varies by platform, typically between 60%-90% on successful trades. Unsuccessful trades lose the full investment amount.")}
        </p>
      </section>

      <section className="section">
        <h2>{t("Trading Types")}</h2>
        <ul>
          <li><strong>{t("High/Low:")}</strong> {t("Bet if the price will be above or below a set level at expiration.")}</li>
          <li><strong>{t("One Touch:")}</strong> {t("Bet if the price will touch a certain level before expiration.")}</li>
          <li><strong>{t("Range:")}</strong> {t("Bet if the price will stay within a certain range.")}</li>
        </ul>
      </section>

      <section className="section">
        <h2>{t("Risk Management")}</h2>
        <p>
          {t("Set investment and loss limits to protect traders, along with providing educational resources to help them understand the risks.")}
        </p>
      </section>
    </div>
 


    


<br></br>
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

export default Learn;











 
