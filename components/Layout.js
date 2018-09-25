import Header from './Header'

const Layout = (props) => (
  <div className="layout">
    <Header title={props.title}/>
    {props.children}
  </div>
)

export default Layout
