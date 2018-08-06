import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = (props) => (
    <header>
        <title>{props.title || "Sample"}</title>
        <h2>Sample</h2>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/contact-us">
          <a style={linkStyle}>Contact Us</a>
        </Link>
        <style jsx global>{`
          h1, a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
    </header>
)

export default Header
