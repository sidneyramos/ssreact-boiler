import Header from './Header'

const Layout = (props) => (
  <div className="super_container">
    <Header title={props.title}/>
    {props.children}
  </div>
)

export default Layout
