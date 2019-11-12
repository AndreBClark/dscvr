import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
<header class="nav-desktop nav-mobile">
        <nav>
            <div class="nav-mobile__navbar">
                <Link to="/">
                    <img id="mobileLogo" src="images/branding/dscvr1.5x.png" alt="DSCVR Logo" />
            </Link>
                    <nav>
                        <ul class="nav-desktop__list">

                            <li class="nav-desktop__item">
                                <a class="nav-link nav-link--primary" href="portfolio.html">Portfolio
                                </a>
                            </li>
                            <li class="nav-desktop__item">
                                <a class="nav-link nav-link--secondary"
                                href="guestbook.html">Guestbook
                            </a>
                        </li>
                        <li  class="nav-desktop__item">
                            <a class=" nav-link nav-link--tertiary" href="contact.html">Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <a id="hamburger"><i  class="fas fa-bars fa-2x nav-mobile__hamburger"></i></a>
            </div>

            {/* <!-- Mobile Nav header: logo and hamburger menu ENDS --> */}

            <ul id="mobileMenu" class="mobile-menu nav-mobile--bg-stripes">
                <li class="nav-desktop__item nav-mobile__item">
                    <a class="nav-link nav-link--primary" href="portfolio.html">Portfolio
                    </a>
                </li>
                <li class="nav-desktop__item nav-mobile__item">
                    <a class="nav-link nav-link--secondary"
                    href="guestbook.html">Guestbook
                </a>
            </li>
            <li  class="nav-desktop__item nav-mobile__item">
                <a class=" nav-link nav-link--tertiary" href="contact.html">Contact
                </a>
            </li>
        </ul>
    </nav>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `DSCVR`,
}

export default Header
