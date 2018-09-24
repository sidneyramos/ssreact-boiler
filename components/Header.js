import Link from 'next/link'
import '../styles/main_styles.css'
import "../styles/bootstrap4/bootstrap.min.css"
import "../plugins/fontawesome-free-5.0.1/css/fontawesome-all.css"
import "../plugins/OwlCarousel2-2.2.1/owl.carousel.css"
import "../plugins/OwlCarousel2-2.2.1/owl.theme.default.css"
import "../plugins/OwlCarousel2-2.2.1/animate.css"

const Header = (props) => (
    <header className="header d-flex flex-row justify-content-end align-items-center">
        <title>Sample{props.title === "Homepage" ? '' : ` - ${props.title}`}</title>
        { /* Logo */ }
        <div className="logo_container mr-auto">
    			<div className="logo">
            <Link href="/">
    				  <a><span>s</span>sample<span>.</span></a>
            </Link>
    			</div>
    		</div>

        { /* Main Navigation */ }
        <nav className="main_nav justify-self-end">
          <ul className="nav_items">
            <li className="active">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <div className="hamburger_container">
    			<span className="hamburger_text">Menu</span>
    			<span className="hamburger_icon"></span>
    		</div>
    </header>
)

export default Header
