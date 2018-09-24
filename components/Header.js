import Link from 'next/link'
// import '../styles/main_styles.css'

const Header = (props) => (
    <header>
        <title>Sample{props.title === "Homepage" ? '' : ` - ${props.title}`}</title>
        <h2>SAMPLE</h2>
        <Link href="/">
          <a>Homepage</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact-us">
          <a>Contact Us</a>
        </Link>
    </header>
)

export default Header
