import Header from './Header'

const Layout = (props) => (
  <div>
    <Header title={props.title}/>
    {props.children}
  </div>
)

export default Layout
