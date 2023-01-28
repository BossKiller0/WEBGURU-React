import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.ABT}</span>
      <span className="navigation-links-text1">{props.FTR}</span>
      <span className="navigation-links-text2">{props.PRI}</span>
      <span className="navigation-links-text3">{props.TM}</span>
      <span className="navigation-links-text4">{props.BLG}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  FTR: 'Features',
  BLG: 'Blog',
  rootClassName: '',
  ABT: 'About',
  PRI: 'Pricing',
  TM: 'Team',
}

NavigationLinks.propTypes = {
  FTR: PropTypes.string,
  BLG: PropTypes.string,
  rootClassName: PropTypes.string,
  ABT: PropTypes.string,
  PRI: PropTypes.string,
  TM: PropTypes.string,
}

export default NavigationLinks
