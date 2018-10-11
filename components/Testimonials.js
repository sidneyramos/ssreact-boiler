import {
  Container,
  Row,
  Col
} from 'reactstrap';

import Slider from "react-slick";

const Testimonials = (props) => (
  <div className="testimonials">
    <div className="quote text-center">“</div>
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      dotsClass="slick-dots testimonial-indicators"
      fade
      lazyLoad
    >
      {
        props.items.map(item => (
          <div className="testimonial text-center">
            <p dangerouslySetInnerHTML={{__html: item}}></p>
          </div>
        ))
      }
    </Slider>
  </div>
)

export default Testimonials
