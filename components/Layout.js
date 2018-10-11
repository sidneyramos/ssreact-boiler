import Header from './Header'
import {
  Container
} from 'reactstrap';

const Layout = (props) => (
  <div className="layout">
    <Header title={props.title}/>
    {props.children}
  </div>
)

export default Layout
