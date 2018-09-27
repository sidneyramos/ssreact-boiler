import {
  Container
} from 'reactstrap';
import classNames from 'classnames';

const Background = (props) => (
  <div className={classNames("background", {
    [`bg-${props.type}`] : props.type,
  })}>
    <style jsx>{`
        .background {
          background-color: ${props.color};
        }
    `}</style>
    {props.children}
  </div>
)

export default Background
