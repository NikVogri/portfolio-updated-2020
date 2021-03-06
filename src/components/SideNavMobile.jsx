import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const MobileNav = ({ links, isOpen, close }) => {
  return (
    <>
      <button
        className={`mobile-nav-background block sm:hidden bg-transparent border-none ${
          isOpen ? "open" : ""
        }`}
        onClick={close}
        onKeyDown={close}
        tabIndex="0"
        aria-label="Close mobile navigation menu"
      ></button>
      <div className={`mobile-nav block sm:hidden p-8 ${isOpen ? "open" : ""}`}>
        {links.map(link => (
          <Link key={link.name} to={link.to} onClick={close}>
            {link.name}
          </Link>
        ))}
      </div>
    </>
  )
}

MobileNav.propTypes = {
  links: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

export default MobileNav
