import Header from './Header'
import {
  Container
} from 'reactstrap';

const Layout = (props) => (
  <div className="layout">
    <Header title={props.title}/>
    <Container>
      {props.children}
    </Container>
  </div>
)

export default Layout
