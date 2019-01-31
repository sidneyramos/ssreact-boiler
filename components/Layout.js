import Header from './Header'
import Footer from './Footer'
import {
  Container
} from 'reactstrap';

const Layout = (props) => (
  <div className="layout">
    <Header title={props.title}/>
    {props.children}
    <Footer/>
  </div>
)

export default Layout
