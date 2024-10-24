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

const Trade = () => {
  const { t } = useTranslation();



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


      <section class="reach-out">
  <div class="background-image">
    <img src="4XC_Astronaut_looking_at_map_out_of_this_world.jpg" alt="Contact Us Background"/>
  </div>
  <div class="content">
    <a href="mailto:contact@yourdomain.com" class="contact-button">Open An Account And Trade Binary</a>
  </div>
</section>

<br></br>

<br></br>





      
      <div class="trading-section">
    <h1>Trading Instruments</h1>
    <p>List of Trading Instruments in Forex | Metals | Index CFDs and Oil | Cryptocurrencies | Forward Contracts.</p>

    <div class="tabs">
        <button class="tab-button active" data-category="all">All</button>
        <button class="tab-button" data-category="forex">Forex</button>
        <button class="tab-button" data-category="metals">Metals</button>
        <button class="tab-button" data-category="index">Index CFDs and Oil</button>
        <button class="tab-button" data-category="crypto">Cryptocurrencies</button>
        <button class="tab-button" data-category="forward">Forward Contracts</button>
    </div>

    <div class="search-bar">
        <input type="text" id="search-input" placeholder="Search by symbol or instrument"/>
    </div>

    <div class="table-container">
        <table id="instruments-table">
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Instrument</th>
                    <th>Leverage</th>
                    <th>Min Trade Lot</th>
                    <th>Platform</th>
                </tr>
            </thead>
            <tbody>
                <tr data-category="crypto">
                    <td>BTCUSDxx</td>
                    <td>Bitcoin vs US Dollar</td>
                    <td>1:20</td>
                    <td>0.01</td>
                    <td>MT4/MT5</td>
                </tr>
                <tr data-category="crypto">
                    <td>ETHUSDxx</td>
                    <td>Ethereum vs US Dollar</td>
                    <td>1:20</td>
                    <td>0.01</td>
                    <td>MT4/MT5</td>
                </tr>
                <tr data-category="crypto">
                    <td>LTCUSDxx</td>
                    <td>Litecoin vs US Dollar</td>
                    <td>1:20</td>
                    <td>0.01</td>
                    <td>MT4/MT5</td>
                </tr>
                <tr data-category="crypto">
                    <td>BTCUSDxx</td>
                    <td>Bitcoin vs US Dollar</td>
                    <td>1:20</td>
                    <td>0.01</td>
                    <td>MT4/MT5</td>
                </tr>
                <tr data-category="crypto">
                    <td>ETHUSDxx</td>
                    <td>Ethereum vs US Dollar</td>
                    <td>1:20</td>
                    <td>0.01</td>
                    <td>MT4/MT5</td>
                </tr>
                <tr data-category="crypto">
                    <td>LTCUSDxx</td>
                    <td>Litecoin vs US Dollar</td>
                    <td>1:20</td>
                    <td>0.01</td>
                    <td>MT4/MT5</td>
                </tr>
                <tr data-category="crypto">
                    <td>BTCUSDxx</td>
                    <td>Bitcoin vs US Dollar</td>
                    <td>1:20</td>
                    <td>0.01</td>
                    <td>MT4/MT5</td>
                </tr>
                <tr data-category="crypto">
                    <td>ETHUSDxx</td>
                    <td>Ethereum vs US Dollar</td>
                    <td>1:20</td>
                    <td>0.01</td>
                    <td>MT4/MT5</td>
                </tr>
                <tr data-category="crypto">
                    <td>LTCUSDxx</td>
                    <td>Litecoin vs US Dollar</td>
                    <td>1:20</td>
                    <td>0.01</td>
                    <td>MT4/MT5</td>
                </tr>
                <tr data-category="crypto">
                    <td>BTCUSDxx</td>
                    <td>Bitcoin vs US Dollar</td>
                    <td>1:20</td>
                    <td>0.01</td>
                    <td>MT4/MT5</td>
                </tr>
                <tr data-category="crypto">
                    <td>ETHUSDxx</td>
                    <td>Ethereum vs US Dollar</td>
                    <td>1:20</td>
                    <td>0.01</td>
                    <td>MT4/MT5</td>
                </tr>
                <tr data-category="crypto">
                    <td>LTCUSDxx</td>
                    <td>Litecoin vs US Dollar</td>
                    <td>1:20</td>
                    <td>0.01</td>
                    <td>MT4/MT5</td>
                </tr>
               
            </tbody>
        </table>
    </div>
</div>



    


<br></br>
<br></br>
      
<footer class="footer">
    <div class="footer-container">
        <div class="footer-column">
            <h4>4xctrader Ltd</h4>
            <p>Company Registration no. 12767/2018 | License number MC03/2018</p>
            <p>1st Floor, BCI House, Avarua, Rarotonga, Cook Islands</p>
            <p><a href="mailto:info@4xc.com">info@4xc.com</a></p>
        </div>

        <div class="footer-column">
            <h4>TRADING INSTRUMENTS</h4>
            <p><a href="#">Forex</a></p>
            <p><a href="#">Metals</a></p>
            <p><a href="#">Index CFDs and Oil</a></p>
            <p><a href="#">Cryptos</a></p>
            <p><a href="#">Forward Contracts</a></p>
        </div>

        <div class="footer-column">
            <h4>ACCOUNTS OVERVIEW</h4>
            <p><a href="#">Pro Account</a></p>
            <p><a href="#">Standard Account</a></p>
            <p><a href="#">VIP Account</a></p>
        </div>

        <div class="footer-column">
            <h4>SUPPORT</h4>
            <p><a href="#">FAQ's</a></p>
            <p><a href="#">Funding Methods</a></p>
            <p><a href="#">Legal Documentation</a></p>
            <p><a href="#">Contact Us</a></p>
        </div>
    </div>

    <div class="legal-notice">
        <p>High Risk Investment Notice: Online trading with margin carries a high level of risk and may not be suitable for all investors as you could sustain losses in excess of deposits. The products are intended for retail, professional, and eligible counterparty clients. For clients who maintain account(s) with 4xctrader, retail clients could sustain a total loss of deposited funds but are not subject to subsequent payment obligations beyond the deposited funds and professional clients could sustain losses in excess of deposits. Prior to trading any products offered by 4xctrader, any affiliates of aforementioned firms, or other firms within 4xctrader of companies [collectively the “4xctrader Ltd”], carefully consider your financial situation and experience level. 4xctrader Ltd may provide general commentary which is not intended as investment advice and must not be construed as such. Seek advice from a separate financial advisor. 4xctrader Ltd assumes no liability for errors, inaccuracies or omissions; does not warrant the accuracy, completeness of information, text, graphics, links, or other items contained within these materials. Read and understand the Terms and Conditions on 4xctrader Ltd websites prior to taking further action.</p>
        <p>4XC is a trademark of 4xctrader Ltd, registered in the Cook Islands with number ICA 12767/2018 and licensed by the FSC (Financial Supervisory Commission) with Money-Changing License number MC03/2018.</p>
        <p>4xctrader Ltd is audited by McMillan Woods.</p>
        <p>4xctrader Ltd does not offer its services to residents of certain jurisdictions such as the USA, Iraq, Iran, Myanmar, North Korea, and Portugal.</p>
    </div>

    <div class="footer-bottom">
        <p>Official Sponsor: (Add Sponsor Logos Here)</p>
        <p>Certification: (Add Certification Logos Here)</p>
        <p>Copyright © 2018 - 2024 4XC.COM | <a href="#">Terms & Conditions</a> | <a href="#">Risk Disclosure</a> | <a href="#">KYC/AML Policy</a> | <a href="#">Privacy Policy</a></p>
        <p>DMCA.com Protection Status</p>
    </div>
</footer>

    </>
  );
};

export default Trade;
