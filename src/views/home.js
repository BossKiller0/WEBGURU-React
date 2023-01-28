import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>WEBGURU</title>
        <meta property="og:title" content="WEBGURU" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <div className="home-container1">
          <img
            alt="logo"
            src="/playground_assets/logo-no-background-200h.png"
            className="home-image"
          />
          <span className="home-text">WEB GURU</span>
        </div>
        <div className="home-container2">
          <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
        </div>
        <div className="home-container3">
          <div className="home-btn-group">
            <button className="home-get-started button">Get Started</button>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </div>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <nav className="home-nav">
            <div data-role="CloseMobileMenu" className="home-menu-close">
              <svg viewBox="0 0 1024 1024" className="home-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
            <img
              src="/playground_assets/logo-no-background-200h.png"
              className="home-image1"
            />
            <span className="home-text01">About</span>
            <span className="home-text02">Features</span>
            <span className="home-text03">Pricing</span>
            <span className="home-text04">Team</span>
            <span className="home-text05">Blog</span>
          </nav>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-container4">
          <h1 className="home-text06">Magnificent things are very simple</h1>
          <span className="home-text07">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <div className="home-btn-group1">
            <button className="home-button button">Get Started</button>
            <button className="home-button1 button">Learn More</button>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1500"
          className="home-image2"
        />
      </div>
    </div>
  )
}

export default Home
