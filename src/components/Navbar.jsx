import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
display: flex;
position: fixed;
width: 100%;
top: 0;
z-index: 10;
background: #fff;
flex-direction: column;
box-shadow: 5px 5px 5px #ccc;
transition: 0.5s all;
text-align: center;
font-size: 2rem;
font-weight: 700;
@media screen and (min-width: ${props => props.theme.colors}) {

}
`
const MobileNavbar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
img {
    width: auto;
    height: auto;
    max-height: 100px;
}
`
const Hamburger = styled.i`
color: #000;
padding: 0 1em;
`
// .nav-desktop {
//     &__list {
//         display: none;
//     }
// }

/* Hide mobile nav menu */
// #mobileMenu {
//     display: none;
// }

/* Main nav styling and animation  */

// .nav-link {
//     font-size: $h1;
//     color           : $color-dark;
//     text-decoration : none;
//     transition      : .5s color;
//     &:hover {
//         color: inherit;
//     }
// }

// .mobile-menu{
//     height: calc(100vh - 88px);
//     z-index: 10;
//     width: 100%;
//     position: fixed;
//     flex-direction: column;
//     justify-content: space-around;
//     background-color: #fff;
//     & li {
//         padding: 1em 0;
//         background: img('branding/stripes.svg') no-repeat;
//         background-size: contain;
//     }
// }


// @media only screen and (min-width: 769px) {

//     #hamburger {
//         display: none;
//     }
    
//     .nav-desktop {
//         text-align : center;
//         font-size  : $h5;
        
//         &__list {
//             display: flex;
//             justify-content: space-around;
//         }
//     }
    
    
    // .nav-link {
    //     position: relative;
    //     display: inline-block;
    //     font-size: $h5;
    //     font-weight: 700;
    //     padding: 0 1em;
    //     color           : $color-dark;
    //     text-decoration : none;
    //     transition      : .5s color;
        
    //     &:after {
    //         background: none repeat scroll 0 0 transparent;
    //         bottom: 0;
    //         content: "";
    //         display: block;
    //         height: .25em;
    //         width: 0;
    //         left: 0;
    //         position: absolute;
    //         background: #fff;
    //         transition: width 0.3s ease 0s, left 0.3s ease 0s;
    //     }
        
        
//         &--primary:after {
//             background : $color-primary;
//         }
        
//         &--secondary:after {
//             background : $color-secondary;
//         }
        
//         &--tertiary:after {
//             background : $color-tertiary;
//         }
        
//         &:hover:after, &:active:after {
//             left  : 0;
//             width : 100%;
//         }
//     }
// }


const Navbar = ({ siteTitle }) => (
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
    
    Navbar.propTypes = {
        siteTitle: PropTypes.string,
    }
    
    Navbar.defaultProps = {
        siteTitle: `DSCVR`,
    }
    
export default Navbar