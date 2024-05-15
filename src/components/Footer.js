// Import the React library
import React from "react";

// Define a functional component called Footer
function Footer() {
  // Render the component's JSX
  return (
    <footer>
      {/* Render a form section for subscribing to updates */}
      <form>
        <div className="subscribe-section">
          {/* Render a heading for the subscribe section */}
          <div className="subscribe-text">
            <h6>KEEP IN TOUCH WITH OUR KITCHEN</h6>
          </div>
          {/* Render an input field for entering the email address */}
          <div className="subsribe-input">
            <input
              autoComplete="on"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          {/* Render a button for submitting the subscription */}
          <div className="subscribe-btn">
            <a href="https://www.ucook.co.za/">SIGN ME UP</a>
          </div>
        </div>
      </form>

      {/* Render the main content section of the footer */}
      <div className="footer-wrap">
        {/* Render a section for product links */}
        <div>
          <h6>PRODUCT</h6>
          <a href="https://www.ucook.co.za/meal-kit/">MEAL KITS</a>
          <a href="https://www.ucook.co.za/frozen/">FROZEN</a>
          <a href="https://www.ucook.co.za/wine">WINE</a>
          <a href="https://www.ucook.co.za/market">MARKET</a>
        </div>
        {/* Render a section for company links */}
        <div>
          <h6>COMPANY</h6>
          <a href="https://www.ucook.co.za/about">ABOUT</a>
          <a href="https://www.ucook.co.za/careers">CAREERS</a>
          <a href="https://www.ucook.co.za/recycling">RECYCLING</a>
        </div>
        {/* Render a section for support links and contact information */}
        <div>
          <h6>SUPPORT</h6>
          <a href="https://support.ucook.co.za/hc/en-us">FAQ'S</a>
          <a href="https://support.ucook.co.za/hc/en-us/requests/new">
            CONTACT
          </a>
          <a href="https://www.ucook.co.za/tel:0214474424">
            <i className="fa-solid fa-phone fa-lg"></i>
            <span>021 447 4424</span>
          </a>
          <a href="whatsapp://send?phone=0720201555">
            <i className="fa-brands fa-whatsapp fa-xl"></i>
            <span>072 020 1555</span>
          </a>
        </div>
        {/* Render a section for app downloads and social media links */}
        <div className="footer-apps">
          <div className="download-app">
            <a
              href="https://apps.apple.com/us/app/ucook/id1669025266"
              className="app-store"
            >
              <img
                alt="app store"
                src={require("../assests/images/app-store.webp")}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=io.gonative.android.jaboxo&hl=en_ZA&gl=US&pli=1 "
              className="google-play"
            >
              <img
                alt="google play"
                src={require("../assests/images/google-play.webp")}
              />
            </a>
          </div>
          <div className="socials">
            <a href="https://www.facebook.com/ucooksa/">
              <i className="fa-brands fa-facebook fa-2xl"></i>
            </a>
            <a href="https://www.instagram.com/ucooksa/">
              <i className="fa-brands fa-instagram fa-2xl"></i>
            </a>
            <a href="https://twitter.com/UCOOKSA">
              <i className="fa-brands fa-twitter fa-2xl"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCi02eriePmaXaj-wyoeGGmg">
              <i className="fa-brands fa-youtube fa-2xl"></i>
            </a>
            <a href="https://www.tiktok.com/@ucooksouthafrica">
              <i className="fa-brands fa-tiktok fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Render a section for terms and conditions, privacy policy, and referral terms */}
      <div className="terms-condition">
        <div className="source">
          <p>
            2024 © UCOOK. All rights reserved by The Supper Society Proprietary
            Limited | Liquor License: WCP/042073 | GAU/10615
          </p>
          <a href="https://www.ucook.co.za/" target="_blank" rel="noreferrer">
            Original Source
          </a>
        </div>

        <div className="copyright">
          <div>
            <a href="https://www.ucook.co.za/terms">Terms & Conditions</a>
          </div>
          <div>
            <a href="https://www.ucook.co.za/privacy-policy">Privacy Policy</a>
          </div>
          <div>
            <a href="https://www.ucook.co.za/referral-policy">Referral Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Export the Footer component as the default export
export default Footer;
