import Header from './Header'
import {
  Container,
  Media
} from 'reactstrap'
import classNames from 'classnames';
import Ionicon from 'react-ionicons'

const MediaList = (props) => (
  <Media list className={classNames(
      props.className,
      {
        "overlap-top": props.overlapTop,
        "no-border": props.noBorder,
        "center-items": props.centerItems,
        "transparent": props.transparent,
        [`row-max-${props.rowMax}`] : props.rowMax
      }
    )}>
    {props.items.map((item) => {
      return (
        <Media tag="li">
          <Media left top className="mb-3">
            {(item.icon && !item.price) && <Ionicon {...item.icon} />}
            {item.price && <h2 className="price">{`$${item.price}`}</h2>}
          </Media>
          <Media body>
            <Media heading className="mb-4">
              {item.headingText}
            </Media>
            <p>{item.bodyText}</p>
          </Media>
        </Media>
      );
    })}
  </Media>
)

export default MediaList
