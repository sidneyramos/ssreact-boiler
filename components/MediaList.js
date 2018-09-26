import Header from './Header'
import {
  Container,
  Media
} from 'reactstrap';

const MediaList = (props) => (
  <Media list {...props}>
    {props.children}
  </Media>
)

export default MediaList
